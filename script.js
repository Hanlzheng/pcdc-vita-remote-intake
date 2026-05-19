// ── State ──
const TOTAL_STEPS = 10;
let currentStep = 1;
let currentLang = 'zh';
let ineligibleReason = '';
let formData = {};

// ── Step definitions ──
const stepNames = {
  zh: ['资格筛查','同意书','人口统计','报税人信息','填表人','报税详情','家庭信息','文件清单','其他','确认提交'],
  en: ['Eligibility','Consent','Demographics','Taxpayer','Form Filler','Tax Details','Household','Documents','Additional','Submit']
};

// ── Build progress bar ──
function buildProgress() {
  const row = document.getElementById('steps-row');
  row.innerHTML = '';
  const names = stepNames[currentLang];
  for (let i = 1; i <= TOTAL_STEPS; i++) {
    if (i > 1) {
      const line = document.createElement('div');
      line.className = 'step-line' + (i - 1 < currentStep ? ' done' : '');
      row.appendChild(line);
    }
    const item = document.createElement('div');
    item.className = 'step-item';
    const num = document.createElement('div');
    num.className = 'step-num ' + (i < currentStep ? 'done' : i === currentStep ? 'active' : 'todo');
    num.textContent = i < currentStep ? '✓' : i;
    const name = document.createElement('div');
    name.className = 'step-name' + (i === currentStep ? ' active' : '');
    name.textContent = names[i-1];
    item.appendChild(num);
    item.appendChild(name);
    row.appendChild(item);
  }
}

// ── Language ──
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  document.querySelectorAll('[data-zh][data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val !== null) el.textContent = val;
  });

  // Update select options
  document.querySelectorAll('select option[data-zh][data-en]').forEach(opt => {
    const val = opt.getAttribute('data-' + lang);
    if (val !== null) opt.textContent = val;
  });

  // Update tag buttons
  document.querySelectorAll('.tag-btn[data-zh][data-en]').forEach(btn => {
    const val = btn.getAttribute('data-' + lang);
    if (val !== null) btn.textContent = val;
  });

  // Update radio text
  document.querySelectorAll('.radio-text strong[data-zh][data-en], .radio-text span[data-zh][data-en]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (val !== null) el.textContent = val;
  });

  buildProgress();
  if (ineligibleReason) showIneligible(ineligibleReason);
}

// ── Radio selection ──
function selectRadio(groupId, val, isDanger, reason) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.radio-card').forEach(card => {
    card.classList.remove('selected');
    const dot = card.querySelector('.radio-indicator');
    if (dot) { dot.classList.remove(); dot.className = 'radio-indicator'; }
  });
  const target = group.querySelector('[data-val="' + val + '"]');
  if (target) {
    target.classList.add('selected');
  }
  formData[groupId] = val;

  if (isDanger && reason) {
    ineligibleReason = reason;
    showIneligible(reason);
  } else {
    // Check if any group still has ineligible selected
    const stillBad = [
      { id:'q-residency', bad:'nonresident' },
      { id:'q-live-outside', bad:'yes' },
      { id:'q-income-outside', bad:'yes' },
      { id:'q-business', bad:'yes' },
      { id:'q-rental', bad:'yes' },
      { id:'q-crypto', bad:'yes' },
      { id:'q-stocks', bad:'yes' },
      { id:'q-income', bad:'yes' }
    ].some(q => formData[q.id] === q.bad);
    if (!stillBad) hideIneligible();
  }
}

function showIneligible(reason) {
  const box = document.getElementById('ineligible-box');
  const reasonEl = document.getElementById('ineligible-reason');
  if (!box || !reasonEl) return;
  const parts = reason.split('\n');
  reasonEl.textContent = currentLang === 'zh' ? parts[0] : (parts[1] || parts[0]);
  box.classList.add('show');
}

function hideIneligible() {
  const box = document.getElementById('ineligible-box');
  if (box) { box.classList.remove('show'); ineligibleReason = ''; }
}

// ── Toggle (checkbox-style) ──
function toggleCheck(el) {
  el.classList.toggle('selected');
}

function toggleTag(groupId, el) {
  el.classList.toggle('selected');
}

// ── Show/hide filler fields ──
function toggleFillerFields() {
  const rel = formData['q-relation'];
  const ff = document.getElementById('filler-fields');
  if (ff) ff.style.display = (rel && rel !== 'Self') ? 'block' : 'none';
}

// ── Validation ──
function validateStep(step) {
  if (step === 1) {
    if (ineligibleReason) {
      alert(currentLang === 'zh' ? '您不符合服务资格，无法继续。如有疑问请联系办公室。' : 'You are not eligible for our service. Please contact our office if you have questions.');
      return false;
    }
    const required = ['q-residency','q-live-outside','q-income-outside','q-business','q-rental','q-crypto','q-stocks','q-income'];
    for (const id of required) {
      if (!formData[id]) {
        alert(currentLang === 'zh' ? '请回答所有必填问题。' : 'Please answer all required questions.');
        return false;
      }
    }
  }
  if (step === 2) {
    if (!formData['q-consent-tp'] || !formData['q-consent-sp']) {
      alert(currentLang === 'zh' ? '请选择同意书签署状态。' : 'Please select consent form signing status.');
      return false;
    }
  }
  if (step === 3) {
    if (!document.getElementById('f-english').value || !document.getElementById('f-marital').value) {
      alert(currentLang === 'zh' ? '请填写所有必填项目。' : 'Please fill in all required fields.');
      return false;
    }
  }
  if (step === 4) {
    const required4 = ['f-last','f-first','f-dob','f-phone','f-email','f-address','f-city','f-zip'];
    for (const id of required4) {
      if (!document.getElementById(id).value.trim()) {
        alert(currentLang === 'zh' ? '请填写所有必填项目。' : 'Please fill in all required fields.');
        document.getElementById(id).focus();
        return false;
      }
    }
    const langs = document.querySelectorAll('#q-language .tag-btn.selected');
    const times = document.querySelectorAll('#q-contact-time .tag-btn.selected');
    if (!langs.length) { alert(currentLang === 'zh' ? '请选择使用语言。' : 'Please select language(s).'); return false; }
    if (!times.length) { alert(currentLang === 'zh' ? '请选择联系时段。' : 'Please select contact time.'); return false; }
    if (!formData['q-returning']) { alert(currentLang === 'zh' ? '请选择新客户或回头客。' : 'Please select new or returning client.'); return false; }
  }
  if (step === 5) {
    if (!formData['q-relation']) {
      alert(currentLang === 'zh' ? '请选择与主报税人的关系。' : 'Please select your relationship to the primary taxpayer.');
      return false;
    }
  }
  if (step === 6) {
    const years = document.querySelectorAll('#q-tax-years .tag-btn.selected');
    if (!years.length) { alert(currentLang === 'zh' ? '请选择报税年份。' : 'Please select tax year(s).'); return false; }
    const req6 = ['q-nj-resident','q-pa-nj','q-nj-pa','q-uber','q-homebuyer'];
    for (const id of req6) {
      if (!formData[id]) { alert(currentLang === 'zh' ? '请回答所有必填问题。' : 'Please answer all required questions.'); return false; }
    }
  }
  if (step === 7) {
    if (!document.getElementById('f-household').value || !document.getElementById('f-dependents').value) {
      alert(currentLang === 'zh' ? '请填写家庭人数和抚养人数量。' : 'Please fill in household size and number of dependents.');
      return false;
    }
  }
  return true;
}

// ── Navigation ──
function showStep(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById('screen-' + n) || document.getElementById('screen-done');
  if (target) target.classList.add('active');
  currentStep = (n === 'done') ? TOTAL_STEPS + 1 : n;
  buildProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextStep(current) {
  if (!validateStep(current)) return;
  collectStepData(current);
  if (current === TOTAL_STEPS) {
    buildSummary();
  }
  showStep(current + 1);
}

function prevStep(current) {
  showStep(current - 1);
}

// ── Collect data ──
function collectStepData(step) {
  if (step === 3) {
    formData['gender'] = document.getElementById('f-gender').value;
    formData['race'] = document.getElementById('f-race').value;
    formData['ethnicity'] = document.getElementById('f-ethnicity').value;
    formData['english'] = document.getElementById('f-english').value;
    formData['disability'] = document.getElementById('f-disability').value;
    formData['marital'] = document.getElementById('f-marital').value;
    formData['housing'] = document.getElementById('f-housing').value;
    formData['education'] = document.getElementById('f-education').value;
    formData['referral'] = document.getElementById('f-referral').value;
  }
  if (step === 4) {
    formData['last'] = document.getElementById('f-last').value;
    formData['first'] = document.getElementById('f-first').value;
    formData['dob'] = document.getElementById('f-dob').value;
    formData['phone'] = document.getElementById('f-phone').value;
    formData['email'] = document.getElementById('f-email').value;
    formData['address'] = document.getElementById('f-address').value;
    formData['city'] = document.getElementById('f-city').value;
    formData['zip'] = document.getElementById('f-zip').value;
    formData['language'] = [...document.querySelectorAll('#q-language .tag-btn.selected')].map(b => b.dataset.val).join(', ');
    formData['contact-time'] = [...document.querySelectorAll('#q-contact-time .tag-btn.selected')].map(b => b.dataset.val).join(', ');
  }
  if (step === 5) {
    formData['filler-last'] = document.getElementById('f-filler-last').value;
    formData['filler-first'] = document.getElementById('f-filler-first').value;
    formData['filler-phone'] = document.getElementById('f-filler-phone').value;
    formData['filler-email'] = document.getElementById('f-filler-email').value;
  }
  if (step === 6) {
    formData['tax-years'] = [...document.querySelectorAll('#q-tax-years .tag-btn.selected')].map(b => b.dataset.val).join(', ');
  }
  if (step === 7) {
    formData['household'] = document.getElementById('f-household').value;
    formData['dependents'] = document.getElementById('f-dependents').value;
  }
  if (step === 8) {
    formData['docs'] = [...document.querySelectorAll('#q-docs .check-card.selected')].map(c => c.dataset.val).join(', ');
  }
  if (step === 9) {
    formData['notes'] = document.getElementById('f-notes').value;
  }
}

// ── Build Summary ──
function buildSummary() {
  collectStepData(9);
  const zh = currentLang === 'zh';
  const rows = [
    { section: zh ? '资格筛查' : 'Eligibility Screening' },
    { key: zh ? '居民身份' : 'Residency', val: formData['q-residency'] },
    { key: zh ? '住在 PA/NJ/DE 以外' : 'Live outside PA/NJ/DE', val: formData['q-live-outside'] },
    { key: zh ? 'PA/NJ/DE 以外收入' : 'Income outside PA/NJ/DE', val: formData['q-income-outside'] },
    { key: zh ? '生意/自营收入' : 'Business income', val: formData['q-business'] },
    { key: zh ? '租金收入' : 'Rental income', val: formData['q-rental'] },
    { key: zh ? '加密货币交易' : 'Crypto transactions', val: formData['q-crypto'] },
    { key: zh ? '股票超10次' : 'Stocks >10', val: formData['q-stocks'] },
    { key: zh ? '收入超 $69,000' : 'Income >$69k', val: formData['q-income'] },

    { section: zh ? '同意书' : 'Consent Forms' },
    { key: zh ? '主报税人同意书' : 'Primary taxpayer consent', val: formData['q-consent-tp'] },
    { key: zh ? '配偶同意书' : 'Spouse consent', val: formData['q-consent-sp'] },

    { section: zh ? '主报税人信息' : 'Primary Taxpayer Info' },
    { key: zh ? '姓名' : 'Name', val: (formData['last'] || '') + ' ' + (formData['first'] || '') },
    { key: zh ? '出生日期' : 'Date of Birth', val: formData['dob'] },
    { key: zh ? '电话' : 'Phone', val: formData['phone'] },
    { key: zh ? '邮箱' : 'Email', val: formData['email'] },
    { key: zh ? '地址' : 'Address', val: (formData['address'] || '') + ', ' + (formData['city'] || '') + ' ' + (formData['zip'] || '') },
    { key: zh ? '语言' : 'Language', val: formData['language'] },
    { key: zh ? '联系时段' : 'Contact time', val: formData['contact-time'] },
    { key: zh ? '新/回头客' : 'New/Returning', val: formData['q-returning'] },

    { section: zh ? '填表人' : 'Form Filler' },
    { key: zh ? '关系' : 'Relationship', val: formData['q-relation'] },
    { key: zh ? '填表人姓名' : 'Filler name', val: formData['q-relation'] !== 'Self' ? ((formData['filler-last'] || '') + ' ' + (formData['filler-first'] || '')) : zh ? '本人' : 'Self' },

    { section: zh ? '报税详情' : 'Tax Details' },
    { key: zh ? '报税年份' : 'Tax year(s)', val: formData['tax-years'] },
    { key: 'NJ Resident', val: formData['q-nj-resident'] },
    { key: 'PA→NJ', val: formData['q-pa-nj'] },
    { key: 'NJ→PA', val: formData['q-nj-pa'] },
    { key: 'Uber/Lyft', val: formData['q-uber'] },
    { key: zh ? '2008购房抵免' : '2008 homebuyer credit', val: formData['q-homebuyer'] },

    { section: zh ? '家庭信息' : 'Household' },
    { key: zh ? '家庭人数' : 'Household size', val: formData['household'] },
    { key: zh ? '抚养人数量' : 'Dependents', val: formData['dependents'] },

    { section: zh ? '文件清单' : 'Documents' },
    { key: zh ? '已准备文件' : 'Documents ready', val: formData['docs'] || (zh ? '无' : 'None') },

    { section: zh ? '其他' : 'Additional' },
    { key: 'Zoom', val: formData['q-zoom'] },
    { key: zh ? '家人也在PCDC' : 'Family at PCDC', val: formData['q-family-pcdc'] },
    { key: zh ? '订阅通讯' : 'Newsletter', val: formData['q-newsletter'] },
    { key: zh ? '了解更多福利' : 'Learn about benefits', val: formData['q-benefits'] },
    { key: zh ? '备注' : 'Notes', val: formData['notes'] || '—' },
  ];

  let html = '';
  rows.forEach(row => {
    if (row.section) {
      html += '<div class="summary-section"><div class="summary-title">' + row.section + '</div>';
    } else if (row.key) {
      html += '<div class="summary-row"><div class="summary-key">' + row.key + '</div><div class="summary-val">' + (row.val || '—') + '</div></div>';
      if (rows[rows.indexOf(row) + 1] && rows[rows.indexOf(row) + 1].section) {
        html += '</div>';
      }
    }
  });
  html += '</div>';

  document.getElementById('summary-body').innerHTML = html;
}

// ── Submit ──
async function submitForm() {
  const btn = document.getElementById('btn-submit');
  btn.disabled = true;
  btn.textContent = currentLang === 'zh' ? '提交中...' : 'Submitting...';

  // ── Airtable Integration ──
  // TODO: Replace with your actual Base ID and API Key
  const AIRTABLE_BASE_ID = 'YOUR_BASE_ID';
  const AIRTABLE_TABLE_NAME = 'VITA Applications';
  const AIRTABLE_API_KEY = 'YOUR_API_KEY';

  const payload = {
    fields: {
      'Residency': formData['q-residency'],
      'Live Outside PA/NJ/DE': formData['q-live-outside'],
      'Income Outside PA/NJ/DE': formData['q-income-outside'],
      'Business Income': formData['q-business'],
      'Rental Income': formData['q-rental'],
      'Crypto Transactions': formData['q-crypto'],
      'Stock Transactions >10': formData['q-stocks'],
      'Income >$69k': formData['q-income'],
      'Consent TP': formData['q-consent-tp'],
      'Consent Spouse': formData['q-consent-sp'],
      'Gender': formData['gender'],
      'Race': formData['race'],
      'Ethnicity': formData['ethnicity'],
      'English Proficiency': formData['english'],
      'Disability': formData['disability'],
      'Marital Status': formData['marital'],
      'Housing': formData['housing'],
      'Education': formData['education'],
      'Referral': formData['referral'],
      'Last Name': formData['last'],
      'First Name': formData['first'],
      'Date of Birth': formData['dob'],
      'Phone': formData['phone'],
      'Email': formData['email'],
      'Address': formData['address'],
      'City': formData['city'],
      'ZIP': formData['zip'],
      'Language': formData['language'],
      'Contact Time': formData['contact-time'],
      'Client Type': formData['q-returning'],
      'Relationship to Taxpayer': formData['q-relation'],
      'Filler Last Name': formData['filler-last'] || '',
      'Filler First Name': formData['filler-first'] || '',
      'Filler Phone': formData['filler-phone'] || '',
      'Filler Email': formData['filler-email'] || '',
      'Tax Years': formData['tax-years'],
      'NJ Resident': formData['q-nj-resident'],
      'Live PA Work NJ': formData['q-pa-nj'],
      'Live NJ Work PA': formData['q-nj-pa'],
      'Uber/Lyft': formData['q-uber'],
      'Homebuyer Credit 2008': formData['q-homebuyer'],
      'Household Size': parseInt(formData['household']) || 0,
      'Dependents': parseInt(formData['dependents']) || 0,
      'Documents Ready': formData['docs'] || '',
      'Zoom': formData['q-zoom'] || '',
      'Family at PCDC': formData['q-family-pcdc'] || '',
      'Newsletter': formData['q-newsletter'] || '',
      'Learn Benefits': formData['q-benefits'] || '',
      'Notes': formData['notes'] || '',
      'Way of Service': 'Online',
      'Event': '2026 VITA (TY 2025)',
      'Language Submitted': currentLang.toUpperCase(),
    }
  };

  try {
    if (AIRTABLE_BASE_ID !== 'YOUR_BASE_ID') {
      const res = await fetch('https://api.airtable.com/v0/' + AIRTABLE_BASE_ID + '/' + encodeURIComponent(AIRTABLE_TABLE_NAME), {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + AIRTABLE_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Airtable error: ' + res.status);
    }
    // Show thank you
    showStep('done');
    document.getElementById('screen-done').classList.add('active');
    document.querySelectorAll('.screen:not(#screen-done)').forEach(s => s.classList.remove('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (err) {
    btn.disabled = false;
    btn.textContent = currentLang === 'zh' ? '提交申请 ✓' : 'Submit Application ✓';
    alert(currentLang === 'zh' ? '提交失败，请重试或联系办公室。\n' + err.message : 'Submission failed. Please try again or contact our office.\n' + err.message);
  }
}

// ── Init ──
buildProgress();