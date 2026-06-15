// ════════════════════════════════════════════════════════════
// FORM CONFIG
// 需要改问题？只改这里，不用碰下面的代码
// Need to change questions? Only edit this section.
// ════════════════════════════════════════════════════════════

const FORM_CONFIG = [

  // ── Step 1: Eligibility ──────────────────────────────────
  {
    step: 1,
    name:     { zh: '资格筛查',         en: 'Eligibility' },
    title:    { zh: '您是否符合服务资格？', en: 'Are you eligible for our service?' },
    subtitle: {
      zh: '请如实回答以下问题。任何一项不符合，我们将说明原因并提供联系方式。',
      en: 'Please answer honestly. If any condition is not met, we will explain why and provide contact information.'
    },
    notice: {
      type: 'info',
      zh: '填写此表并不保证一定可以获得服务。我们将根据您所提供的信息进行资格审核，如符合条件，我们的团队将与您联系并告知后续步骤。',
      en: 'Completing this form does not guarantee service. Eligibility will be reviewed based on the information you provide, and our team will contact you with next steps if applicable.'
    },
    questions: [
      {
        id: 'q-residency',
        required: true,
        label: { zh: '您的报税身份是什么？', en: 'What is your tax residency status?' },
        hint: {
          zh: '持有绿卡或美国国籍请选择第一项；持签证但在美国住满183天请选第二项。',
          en: 'Green card holders and US citizens select the first option; visa holders who lived in the US 183+ days select the second.'
        },
        type: 'radio',
        options: [
          { val: 'citizen',     zh: '美国公民 / 绿卡持有者',    en: 'US Citizen / Green Card Holder' },
          { val: 'resident',    zh: '持签证，在美国住满183天',   en: 'Visa holder, 183+ days in US' },
          {
            val: 'nonresident', zh: '非居民外国人 (Nonresident Alien)', en: 'Nonresident Alien',
            disqualify: true,
            reason: {
              zh: '我们目前不提供非居民外国人 (Nonresident Alien) 的报税服务。',
              en: 'We currently do not provide tax services for Nonresident Aliens.'
            }
          },
          { val: 'unsure', zh: '不确定，需要协助判断', en: 'Unsure, need assistance to determine' }
        ]
      },
      {
        id: 'q-live-outside',
        required: true,
        label: {
          zh: '您住在宾州、新泽西或特拉华之外的州吗？',
          en: 'Do you live outside of PA, NJ, or DE?'
        },
        type: 'radio',
        options: [
          {
            val: 'yes', zh: '是 Yes', en: 'Yes 是',
            disqualify: true,
            reason: { zh: '我们目前只服务居住在 PA、NJ、DE 的居民。', en: 'We currently only serve residents of PA, NJ, and DE.' }
          },
          { val: 'no', zh: '否 No', en: 'No 否' }
        ]
      },
      {
        id: 'q-income-outside',
        required: true,
        label: {
          zh: '您有宾州、新泽西或特拉华之外的州的收入吗？',
          en: 'Do you have income from states other than PA, NJ, or DE?'
        },
        hint: {
          zh: '请检查您的 W-2 Box 15 是否有 PA、DE、NJ 以外的州缩写',
          en: 'Please check Box 15 on your W-2 for state abbreviations other than PA, DE, or NJ'
        },
        type: 'radio',
        options: [
          {
            val: 'yes', zh: '是 Yes', en: 'Yes 是',
            disqualify: true,
            reason: { zh: '我们目前不处理其他州的州税申报。', en: 'We currently do not handle tax returns for other states.' }
          },
          { val: 'no', zh: '否 No', en: 'No 否' }
        ]
      },
      {
        id: 'q-business',
        required: true,
        label: { zh: '您2026年有做生意/自营收入吗？', en: 'Do you have business/self-employment income in 2026?' },
        hint: { zh: '不包括 Uber/Lyft、餐馆员工等', en: 'Excludes Uber/Lyft drivers, restaurant employees, etc.' },
        type: 'radio',
        options: [
          {
            val: 'yes', zh: '是 Yes', en: 'Yes 是',
            disqualify: true,
            reason: { zh: '商业/自营收入超出我们的服务范围。', en: 'Business/self-employment income is outside our service scope.' }
          },
          { val: 'no', zh: '否 No', en: 'No 否' }
        ]
      },
      {
        id: 'q-rental',
        required: true,
        label: { zh: '您2026年有租金收入吗？', en: 'Do you have rental income in 2026?' },
        type: 'radio',
        options: [
          {
            val: 'yes', zh: '是 Yes', en: 'Yes 是',
            disqualify: true,
            reason: { zh: '租金收入超出我们的服务范围。', en: 'Rental income is outside our service scope.' }
          },
          { val: 'no', zh: '否 No', en: 'No 否' }
        ]
      },
      {
        id: 'q-crypto',
        required: true,
        label: { zh: '您2026年有加密货币交易吗？（买或卖）', en: 'Do you have cryptocurrency transactions in 2026? (buying or selling)' },
        type: 'radio',
        options: [
          {
            val: 'yes', zh: '是 Yes', en: 'Yes 是',
            disqualify: true,
            reason: { zh: '加密货币交易超出我们的服务范围。', en: 'Cryptocurrency transactions are outside our service scope.' }
          },
          { val: 'no', zh: '否 No', en: 'No 否' }
        ]
      },
      {
        id: 'q-stocks',
        required: true,
        label: { zh: '您2026年有超过10次股票交易吗？', en: 'Do you have more than 10 stock transactions in 2026?' },
        type: 'radio',
        options: [
          {
            val: 'yes', zh: '是 Yes', en: 'Yes 是',
            disqualify: true,
            reason: { zh: '超过10次股票交易超出我们的服务范围。', en: 'More than 10 stock transactions is outside our service scope.' }
          },
          { val: 'no', zh: '否 No', en: 'No 否' }
        ]
      },
      {
        id: 'q-income',
        required: true,
        label: { zh: '您2025年的总家庭收入超过 $69,000 吗？', en: 'Did your total household income exceed $69,000 in 2025?' },
        type: 'radio',
        options: [
          {
            val: 'yes', zh: '是 Yes', en: 'Yes 是',
            disqualify: true,
            reason: { zh: '您的家庭收入超过 VITA 服务上限 $69,000。', en: 'Your household income exceeds the VITA service limit of $69,000.' }
          },
          { val: 'no', zh: '否 No', en: 'No 否' }
        ]
      }
    ]
  },

  // ── Step 2: Consent ──────────────────────────────────────
  {
    step: 2,
    name:     { zh: '同意书',          en: 'Consent' },
    title:    { zh: '请签署 IRS 14446 表格', en: 'Please Sign IRS Form 14446' },
    subtitle: {
      zh: '在继续填写前，请通过下方链接签署同意书。签署后返回此页面继续。',
      en: 'Before continuing, please sign the consent form using the link below. Return to this page after signing.'
    },
    notice: {
      type: 'warning',
      zh: '如不同意签署，您将无法获得报稅服务。签署后请勾选下方「已签名」。',
      en: "If you do not agree to sign, you will not be able to receive tax filing services. After signing, please check 'Signed' below."
    },
    questions: [
      {
        id: 'q-consent-tp',
        required: true,
        type: 'consent',
        sectionLabel: { zh: '主报税人 Primary Taxpayer', en: 'Primary Taxpayer 主报税人' },
        link: { url: 'https://bit.ly/F14446ChineseTP', zh: '点击此处签署主报税人同意书', en: 'Click here to sign Primary Taxpayer consent form' },
        label: { zh: '主报税人签署状态', en: 'Primary Taxpayer Signing Status' },
        options: [
          { val: 'signed',   zh: '已签名 Signed',   en: 'Signed 已签名' },
          { val: 'unsigned', zh: '未签名 Not Signed', en: 'Not Signed 未签名' },
          { val: 'na',       zh: '不适用 N/A',        en: 'N/A 不适用' }
        ]
      },
      {
        id: 'q-consent-sp',
        required: true,
        type: 'consent',
        sectionLabel: { zh: '配偶 Spouse', en: 'Spouse 配偶' },
        link: { url: 'https://bit.ly/F14446ChineseSpouse', zh: '点击此处签署配偶同意书', en: 'Click here to sign Spouse consent form' },
        label: { zh: '配偶签署状态', en: 'Spouse Signing Status' },
        options: [
          { val: 'signed',   zh: '已签名 Signed',   en: 'Signed 已签名' },
          { val: 'unsigned', zh: '未签名 Not Signed', en: 'Not Signed 未签名' },
          { val: 'na',       zh: '不适用 N/A',        en: 'N/A 不适用' }
        ]
      }
    ]
  },

  // ── Step 3: Demographics ─────────────────────────────────
  {
    step: 3,
    name:     { zh: '人口统计',      en: 'Demographics' },
    title:    { zh: '基本人口统计信息', en: 'Basic Demographic Information' },
    subtitle: {
      zh: '此信息仅用于统计，不影响服务资格。',
      en: 'This information is used for statistical purposes only and does not affect eligibility.'
    },
    questions: [
      {
        id: 'f-gender', type: 'select',
        label: { zh: '性别', en: 'Gender' },
        options: [
          { val: 'Male',                  zh: '男 Male',   en: 'Male 男' },
          { val: 'Female',                zh: '女 Female', en: 'Female 女' },
          { val: 'Prefer not to answer',  zh: '不想回答',   en: 'Prefer not to answer' }
        ]
      },
      {
        id: 'f-race', type: 'select',
        label: { zh: '种族', en: 'Race' },
        options: [
          { val: 'Hispanic or Latino',     zh: '西班牙裔或拉丁裔',     en: 'Hispanic or Latino' },
          { val: 'Not Hispanic or Latino', zh: '不是西班牙裔或拉丁裔', en: 'Not Hispanic or Latino' }
        ]
      },
      {
        id: 'f-ethnicity', type: 'select', full: true,
        label: { zh: '民族', en: 'Ethnicity' },
        options: [
          { val: 'Asian',                                     zh: '亚洲人',              en: 'Asian' },
          { val: 'Black or African American',                 zh: '黑人或非裔美国人',     en: 'Black or African American' },
          { val: 'White',                                     zh: '白人',                en: 'White' },
          { val: 'Native Hawaiian or other Pacific Islander', zh: '夏威夷原住民或其他太平洋岛民', en: 'Native Hawaiian or other Pacific Islander' },
          { val: 'American Indian or Alaska Native',          zh: '美洲印第安人或阿拉斯加原住民', en: 'American Indian or Alaska Native' },
          { val: 'Prefer not to answer',                      zh: '不想回答',            en: 'Prefer not to answer' }
        ]
      },
      {
        id: 'f-english', type: 'select', required: true,
        label: { zh: '英语水平', en: 'English Proficiency' },
        options: [
          { val: 'Proficient',     zh: '熟练 Proficient',     en: 'Proficient 熟练' },
          { val: 'Not proficient', zh: '不熟练 Not proficient', en: 'Not proficient 不熟练' }
        ]
      },
      {
        id: 'f-disability', type: 'select',
        label: { zh: '残障状况', en: 'Disability Status' },
        options: [
          { val: 'Disabled',     zh: '残障人士', en: 'Disabled' },
          { val: 'Not disabled', zh: '非残障人士', en: 'Not disabled' }
        ]
      },
      {
        id: 'f-marital', type: 'select', required: true,
        label: { zh: '婚姻状况', en: 'Marital Status' },
        options: [
          { val: 'Single',    zh: '单身 Single',           en: 'Single 单身' },
          { val: 'Married',   zh: '已婚 Married',          en: 'Married 已婚' },
          { val: 'Separated', zh: '分居 Separated',        en: 'Separated 分居' },
          { val: 'Divorced',  zh: '离婚 Divorced',         en: 'Divorced 离婚' },
          { val: 'Widow(er)', zh: '寡妇或鳏夫 Widow(er)', en: 'Widow(er) 寡妇或鳏夫' }
        ]
      },
      {
        id: 'f-housing', type: 'select',
        label: { zh: '房屋状况', en: 'Housing Status' },
        options: [
          { val: 'Rent',             zh: '租客 Rent',          en: 'Rent 租客' },
          { val: 'Own',              zh: '房主 Own',           en: 'Own 房主' },
          { val: 'Living with others', zh: '与他人同住',        en: 'Living with others' }
        ]
      },
      {
        id: 'f-education', type: 'select',
        label: { zh: '教育程度', en: 'Education Level' },
        options: [
          { val: 'College or above',    zh: '大专及以上',   en: 'College or above' },
          { val: 'High school',         zh: '中学',         en: 'High school' },
          { val: 'Middle school',       zh: '初中',         en: 'Middle school' },
          { val: 'Elementary school',   zh: '小学',         en: 'Elementary school' },
          { val: 'No formal education', zh: '没有正规教育', en: 'No formal education' }
        ]
      },
      {
        id: 'f-referral', type: 'select', full: true,
        label: { zh: '您是怎么知道我们的服务？', en: 'How did you hear about our service?' },
        options: [
          { val: 'IRS',             zh: '国税局 IRS',         en: 'IRS 国税局' },
          { val: 'PCDC Marketing',  zh: 'PCDC 营销',          en: 'PCDC Marketing' },
          { val: 'Friends or family', zh: '朋友或家人',        en: 'Friends or family' },
          { val: 'Returning client', zh: '回头客',             en: 'Returning client' },
          { val: 'CWF',             zh: 'Campaign for Working Families (CWF)', en: 'Campaign for Working Families (CWF)' },
          { val: 'KITHS',           zh: 'KITHS',               en: 'KITHS' },
          { val: 'Other',           zh: '其他',                en: 'Other' }
        ]
      }
    ]
  },

  // ── Step 4: Primary Taxpayer ─────────────────────────────
  {
    step: 4,
    name:  { zh: '报税人信息',    en: 'Taxpayer' },
    title: { zh: '主报税人基本信息', en: 'Primary Taxpayer Information' },
    questions: [
      { id: 'f-last',    type: 'text',   required: true, label: { zh: '姓氏 Last Name',  en: 'Last Name 姓氏' } },
      { id: 'f-first',   type: 'text',   required: true, label: { zh: '名字 First Name', en: 'First Name 名字' } },
      { id: 'f-dob',     type: 'date',   required: true, label: { zh: '出生日期', en: 'Date of Birth' } },
      { id: 'f-phone',   type: 'tel',    required: true, label: { zh: '电话号码', en: 'Phone Number' } },
      {
        id: 'f-email', type: 'email', required: true, full: true,
        label: { zh: '电子邮箱', en: 'Email Address' },
        hint:  { zh: '如没有电子邮箱，请填写 N/A。电子邮箱是重要联系渠道，请确保正确。', en: 'If you have no email, enter N/A. Email is an important communication channel — please ensure it is correct.' }
      },
      {
        id: 'f-address', type: 'text', required: true, full: true,
        label: { zh: '邮寄地址（门牌号、街道名称、单位号）', en: 'Mailing Address (street number, name, unit)' }
      },
      {
        id: 'f-city', type: 'select', required: true,
        label: { zh: '城市 City', en: 'City 城市' },
        options: [
          { val: 'Philadelphia', zh: 'Philadelphia 费城', en: 'Philadelphia 费城' },
          { val: 'Other',        zh: '其他 Other',        en: 'Other 其他' }
        ]
      },
      { id: 'f-zip', type: 'text', required: true, label: { zh: '邮政编码 ZIP', en: 'ZIP Code' }, maxlength: 10 },
      {
        id: 'q-language', type: 'tags', required: true, full: true,
        label: { zh: '使用语言（可多选，请优先选最擅长的）', en: 'Language(s) spoken (select all, strongest first)' },
        options: [
          { val: 'Cantonese', zh: '广东话 Cantonese', en: 'Cantonese 广东话' },
          { val: 'English',   zh: '英语 English',     en: 'English 英语' },
          { val: 'Mandarin',  zh: '普通话 Mandarin',  en: 'Mandarin 普通话' }
        ]
      },
      {
        id: 'q-contact-time', type: 'tags', required: true, full: true,
        label: { zh: '希望联系时段（可多选）', en: 'Preferred contact time (select all that apply)' },
        options: [
          { val: 'Any',            zh: '任何时间',     en: 'Any time' },
          { val: 'Morning',        zh: '早上',         en: 'Morning' },
          { val: 'Afternoon',      zh: '下午',         en: 'Afternoon' },
          { val: 'Evening',        zh: '晚上',         en: 'Evening' },
          { val: 'Monday to Friday', zh: '周一至周五', en: 'Monday to Friday' },
          { val: 'Weekend',        zh: '周末',         en: 'Weekend' }
        ]
      },
      {
        id: 'q-returning', type: 'radio', required: true,
        label: { zh: '新客户或回头客', en: 'New or returning client' },
        options: [
          { val: 'Returning Client', zh: '回头客 Returning Client', en: 'Returning Client 回头客' },
          { val: 'New Client',       zh: '新客户 New Client',       en: 'New Client 新客户' }
        ]
      }
    ]
  },

  // ── Step 5: Form Filler ──────────────────────────────────
  {
    step: 5,
    name:     { zh: '填表人',        en: 'Form Filler' },
    title:    { zh: '谁在填写这份表格？', en: 'Who is completing this form?' },
    questions: [
      {
        id: 'q-relation', type: 'radio', required: true, full: true,
        label: { zh: '您与主报税人的关系是？', en: 'What is your relationship to the primary taxpayer?' },
        options: [
          { val: 'Self',            zh: '本人 Self',          en: 'Self 本人' },
          { val: 'Spouse',          zh: '配偶 Spouse',        en: 'Spouse 配偶' },
          { val: 'Parents',         zh: '父母 Parents',       en: 'Parents 父母' },
          { val: 'Son or Daughter', zh: '子女 Son/Daughter',  en: 'Son/Daughter 子女' },
          { val: 'Brother or Sister', zh: '兄弟姐妹 Sibling', en: 'Sibling 兄弟姐妹' },
          { val: 'Other',           zh: '其他 Other',         en: 'Other 其他' }
        ]
      },
      // These only show when relation !== Self
      { id: 'f-filler-last',  type: 'text',  required: true, showIfNotSelf: true, label: { zh: '填表人姓氏',  en: 'Filler Last Name' } },
      { id: 'f-filler-first', type: 'text',  required: true, showIfNotSelf: true, label: { zh: '填表人名字',  en: 'Filler First Name' } },
      { id: 'f-filler-phone', type: 'tel',   required: true, showIfNotSelf: true, label: { zh: '填表人电话',  en: 'Filler Phone' } },
      {
        id: 'f-filler-email', type: 'email', required: true, showIfNotSelf: true,
        label: { zh: '填表人邮箱', en: 'Filler Email' },
        hint:  { zh: '如无电子邮箱请填 N/A', en: 'Enter N/A if no email' }
      }
    ]
  },

  // ── Step 6: Tax Details ──────────────────────────────────
  {
    step: 6,
    name:  { zh: '报税详情',        en: 'Tax Details' },
    title: { zh: '报税年份及特殊情况', en: 'Tax Years and Special Circumstances' },
    questions: [
      {
        id: 'q-tax-years', type: 'tags', required: true, full: true,
        label: { zh: '您打算报哪几年的税？（可多选）', en: 'Which tax year(s) do you want to file? (select all that apply)' },
        options: [
          { val: '2025', zh: '2025', en: '2025' },
          { val: '2024', zh: '2024', en: '2024' },
          { val: '2023', zh: '2023', en: '2023' },
          { val: '2022', zh: '2022', en: '2022' },
          { val: '2021', zh: '2021', en: '2021' }
        ]
      },
      {
        id: 'q-nj-resident', type: 'radio', required: true,
        label: { zh: '您是新泽西 NJ 居民吗？', en: 'Are you a New Jersey (NJ) resident?' },
        options: [
          { val: 'Yes', zh: '是 Yes', en: 'Yes 是' },
          { val: 'No',  zh: '否 No',  en: 'No 否' }
        ]
      },
      {
        id: 'q-pa-nj', type: 'radio', required: true,
        label: { zh: '住在 PA，在 NJ 工作？', en: 'Live in PA, work in NJ?' },
        options: [
          { val: 'Yes', zh: '是 Yes', en: 'Yes 是' },
          { val: 'No',  zh: '否 No',  en: 'No 否' }
        ]
      },
      {
        id: 'q-nj-pa', type: 'radio', required: true,
        label: { zh: '住在 NJ，在 PA 工作？', en: 'Live in NJ, work in PA?' },
        options: [
          { val: 'Yes', zh: '是 Yes', en: 'Yes 是' },
          { val: 'No',  zh: '否 No',  en: 'No 否' }
        ]
      },
      {
        id: 'q-uber', type: 'radio', required: true,
        label: { zh: '您是开 Uber/Lyft 的吗？', en: 'Do you drive for Uber/Lyft?' },
        options: [
          { val: 'Yes', zh: '是 Yes', en: 'Yes 是' },
          { val: 'No',  zh: '否 No',  en: 'No 否' }
        ]
      },
      {
        id: 'q-homebuyer', type: 'radio', required: true, full: true,
        label: { zh: '您曾参加过2008年首次购房者税收抵免计划吗？', en: 'Did you receive the 2008 First-Time Homebuyer Tax Credit?' },
        options: [
          { val: 'Yes',   zh: '是 Yes',    en: 'Yes 是' },
          { val: 'No',    zh: '否 No',     en: 'No 否' },
          { val: 'Unsure', zh: '不确定',   en: 'Unsure' }
        ]
      }
    ]
  },

  // ── Step 7: Household ────────────────────────────────────
  {
    step: 7,
    name:  { zh: '家庭信息',      en: 'Household' },
    title: { zh: '家庭人数与抚养人', en: 'Household Size and Dependents' },
    questions: [
      { id: 'f-household',  type: 'number', required: true, label: { zh: '家庭人数',    en: 'Household Size' },        min: 1, max: 20 },
      { id: 'f-dependents', type: 'number', required: true, label: { zh: '受抚养人数量', en: 'Number of Dependents' }, min: 0, max: 20 }
    ]
  },

  // ── Step 8: Documents ────────────────────────────────────
  {
    step: 8,
    name:     { zh: '文件清单',       en: 'Documents' },
    title:    { zh: '您已准备好哪些文件？', en: 'Which documents do you have ready?' },
    subtitle: { zh: '请勾选您已准备好的文件（可多选）', en: 'Please check all documents you have prepared' },
    questions: [
      {
        id: 'q-docs', type: 'checks', full: true,
        options: [
          { val: 'ID',                  zh: '身份证 ID',           en: 'Photo ID 身份证',        desc: { zh: '有效照片身份证', en: 'Valid photo ID' } },
          { val: 'SS Cards',            zh: '社会安全卡',           en: 'Social Security Cards',  desc: { zh: '本人及家庭成员', en: 'Taxpayer and family' } },
          { val: 'Last year Tax Return', zh: '去年报税表',          en: "Last Year's Tax Return", desc: { zh: '2025年报税表（如有）', en: '2025 return (if available)' } },
          { val: '1095-A',              zh: '1095-A',              en: '1095-A',                 desc: { zh: '奥巴马医疗保险表', en: 'ACA Marketplace insurance' } },
          { val: 'W2',                  zh: 'W-2',                 en: 'W-2',                    desc: { zh: '工资收入表', en: 'Wage and salary income' } },
          { val: '1099-NEC',            zh: '1099-NEC',            en: '1099-NEC',               desc: { zh: '自营/合同工收入', en: 'Self-employment income' } },
          { val: '1099-MISC',           zh: '1099-MISC',           en: '1099-MISC',              desc: { zh: '杂项收入', en: 'Miscellaneous income' } },
          { val: '1099-R',              zh: '1099-R',              en: '1099-R',                 desc: { zh: '退休金收入', en: 'Retirement income' } },
          { val: '1099-G',              zh: '1099-G',              en: '1099-G',                 desc: { zh: '政府福利/失业金', en: 'Government benefits / unemployment' } },
          { val: '1099-INT/DIV',        zh: '1099-INT / DIV',      en: '1099-INT / DIV',         desc: { zh: '利息/股息收入', en: 'Interest / dividend income' } },
          { val: '1099-Conso/B',        zh: '1099-Conso / 1099-B', en: '1099-Conso / 1099-B',   desc: { zh: '股票/基金交易', en: 'Stock transactions' } },
          { val: '1099-SSA',            zh: '1099-SSA',            en: '1099-SSA',               desc: { zh: '社会安全退休金', en: 'Social Security benefits' } },
          { val: '1098-T',              zh: '1098-T',              en: '1098-T',                 desc: { zh: '学费支付明细', en: 'Tuition statement' } },
          { val: '1098-E',              zh: '1098-E',              en: '1098-E',                 desc: { zh: '学生贷款利息', en: 'Student loan interest' } },
          { val: 'Voided Check',        zh: '作废支票',             en: 'Voided Check',           desc: { zh: '用于退税直接存款', en: 'For direct deposit' } }
        ]
      }
    ]
  },

  // ── Step 9: Additional ───────────────────────────────────
  {
    step: 9,
    name:  { zh: '其他',    en: 'Additional' },
    title: { zh: '最后几个问题', en: 'A few more questions' },
    questions: [
      {
        id: 'q-zoom', type: 'radio',
        label: { zh: '您知道怎样使用 Zoom 吗？', en: 'Do you know how to use Zoom?' },
        options: [
          { val: 'Yes', zh: '知道 Yes', en: 'Yes 知道' },
          { val: 'No',  zh: '不知道 No', en: 'No 不知道' }
        ]
      },
      {
        id: 'q-family-pcdc', type: 'radio',
        label: { zh: '您的父母或孩子也在 PCDC 申请报税服务吗？', en: 'Are your parents or children also applying for PCDC tax services?' },
        options: [
          { val: 'Yes',   zh: '是 Yes',    en: 'Yes 是' },
          { val: 'No',    zh: '否 No',     en: 'No 否' },
          { val: 'Unsure', zh: '不确定',   en: 'Unsure' }
        ]
      },
      {
        id: 'f-notes', type: 'textarea', full: true,
        label: { zh: '您有任何疑问或意见想反馈给我们吗？', en: 'Do you have any questions or feedback for us?' }
      },
      {
        id: 'q-newsletter', type: 'radio',
        label: { zh: '您想收到我们的住房和家庭通讯吗？', en: 'Would you like to receive our housing and family newsletter?' },
        options: [
          { val: 'Yes', zh: '参加 Yes',   en: 'Yes 参加' },
          { val: 'No',  zh: '不参加 No', en: 'No 不参加' }
        ]
      },
      {
        id: 'q-benefits', type: 'radio',
        label: { zh: '您想了解更多福利或其他援助计划吗？', en: 'Would you like to learn about other benefits or assistance programs?' },
        options: [
          { val: 'Yes', zh: '想了解 Yes', en: 'Yes 想了解' },
          { val: 'No',  zh: '不需要 No',  en: 'No 不需要' }
        ]
      }
    ]
  }
];

// Airtable config — fill in when ready
const AIRTABLE_BASE_ID   = 'YOUR_BASE_ID';
const AIRTABLE_TABLE     = 'VITA Applications';
const AIRTABLE_API_KEY   = 'YOUR_API_KEY';

// ════════════════════════════════════════════════════════════
// STATE
// ════════════════════════════════════════════════════════════
const TOTAL_STEPS = FORM_CONFIG.length;
let currentStep   = 1;
let currentLang   = 'zh';
let formData      = {};
let ineligibleReasons = {};  // { questionId: reasonText }

// ════════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════════
const t = (obj) => obj ? (obj[currentLang] || obj.zh || '') : '';
const esc = (s) => String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');

// ════════════════════════════════════════════════════════════
// RENDERER
// ════════════════════════════════════════════════════════════
function renderRadioOption(q, opt) {
  const isDanger = !!opt.disqualify;
  return `
    <div class="radio-card ${isDanger ? 'danger-card' : ''}" data-val="${esc(opt.val)}"
         onclick="handleRadio('${q.id}','${esc(opt.val)}',${isDanger ? `'${esc(JSON.stringify(opt.reason || {}))}'` : 'null'})">
      <div class="radio-indicator"></div>
      <div class="radio-text">
        <strong class="bilingual" data-zh="${esc(opt.zh)}" data-en="${esc(opt.en)}">${esc(t(opt))}</strong>
      </div>
      ${isDanger ? `<div class="radio-tag red bilingual" data-zh="不符合资格" data-en="Ineligible">${currentLang==='zh'?'不符合资格':'Ineligible'}</div>` : ''}
    </div>`;
}

function renderQuestion(q) {
  if (q.type === 'consent') return renderConsent(q);

  const isNotSelf = q.showIfNotSelf;
  const wrapId    = isNotSelf ? `filler-field-${q.id}` : '';
  const wrapStyle = isNotSelf ? 'display:none;' : '';
  const colClass  = q.full ? 'field full' : 'field';

  let inner = '';

  if (q.type === 'radio') {
    inner = `<div class="radio-cards" id="${q.id}">${q.options.map(o => renderRadioOption(q, o)).join('')}</div>`;
  } else if (q.type === 'tags') {
    inner = `<div class="tag-group" id="${q.id}">${q.options.map(o =>
      `<button class="tag-btn bilingual" data-val="${esc(o.val)}" data-zh="${esc(o.zh)}" data-en="${esc(o.en)}" onclick="toggleTag('${q.id}',this)">${esc(t(o))}</button>`
    ).join('')}</div>`;
  } else if (q.type === 'checks') {
    inner = `<div class="check-cards" id="${q.id}">${q.options.map(o => `
      <div class="check-card" data-val="${esc(o.val)}" onclick="toggleCheck(this)">
        <div class="check-indicator"></div>
        <div class="check-text">
          <strong class="bilingual" data-zh="${esc(o.zh)}" data-en="${esc(o.en)}">${esc(t(o))}</strong>
          <span class="bilingual" data-zh="${esc(t(o.desc))}" data-en="${esc(t(o.desc))}">${esc(t(o.desc))}</span>
        </div>
      </div>`).join('')}
    </div>`;
  } else if (q.type === 'select') {
    inner = `<select id="${q.id}" ${q.required?'required':''}>
      <option value="" class="bilingual" data-zh="请选择" data-en="Please select">${currentLang==='zh'?'请选择':'Please select'}</option>
      ${q.options.map(o => `<option value="${esc(o.val)}" class="bilingual" data-zh="${esc(o.zh)}" data-en="${esc(o.en)}">${esc(t(o))}</option>`).join('')}
    </select>`;
  } else if (q.type === 'textarea') {
    inner = `<textarea id="${q.id}" placeholder="${currentLang==='zh'?'选填 / Optional':'Optional / 选填'}"></textarea>`;
  } else {
    const extra = q.maxlength ? `maxlength="${q.maxlength}"` : (q.min !== undefined ? `min="${q.min}" max="${q.max}"` : '');
    inner = `<input type="${q.type}" id="${q.id}" ${q.required?'required':''} ${extra}>`;
  }

  const hintHtml = q.hint ? `<div class="field-hint bilingual" data-zh="${esc(q.hint.zh)}" data-en="${esc(q.hint.en)}">${esc(t(q.hint))}</div>` : '';

  const labelHtml = q.label ? `
    <div class="field-label">
      <span class="bilingual" data-zh="${esc(q.label.zh)}" data-en="${esc(q.label.en)}">${esc(t(q.label))}</span>
      ${q.required ? '<span class="req">*</span>' : ''}
    </div>` : '';

  const fieldHtml = `<div class="${colClass}" ${wrapId ? `id="${wrapId}" style="${wrapStyle}"` : ''}>
    ${labelHtml}${hintHtml}${inner}
  </div>`;

  return fieldHtml;
}

function renderConsent(q) {
  return `
    <div class="field full" style="margin-bottom:24px;">
      <div class="form-section-title bilingual" data-zh="${esc(q.sectionLabel.zh)}" data-en="${esc(q.sectionLabel.en)}">${esc(t(q.sectionLabel))}</div>
      <a class="consent-link" href="${q.link.url}" target="_blank">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        <span class="bilingual" data-zh="${esc(q.link.zh)}" data-en="${esc(q.link.en)}">${esc(t(q.link))}</span>
      </a>
      <div class="field-label bilingual" data-zh="${esc(q.label.zh)}" data-en="${esc(q.label.en)}">${esc(t(q.label))}<span class="req">*</span></div>
      <div class="radio-cards" id="${q.id}">
        ${q.options.map(o => `
          <div class="radio-card" data-val="${esc(o.val)}" onclick="handleRadio('${q.id}','${esc(o.val)}',null)">
            <div class="radio-indicator"></div>
            <div class="radio-text"><strong class="bilingual" data-zh="${esc(o.zh)}" data-en="${esc(o.en)}">${esc(t(o))}</strong></div>
          </div>`).join('')}
      </div>
    </div>`;
}

function renderStep(cfg) {
  const noticeHtml = cfg.notice ? `
    <div class="notice ${cfg.notice.type === 'warning' ? 'warning' : ''} bilingual"
         data-zh="${esc(cfg.notice.zh)}" data-en="${esc(cfg.notice.en)}">${esc(t(cfg.notice))}</div>` : '';

  const ineligibleHtml = cfg.step === 1 ? `
    <div class="ineligible-box" id="ineligible-box">
      <div class="ineligible-icon">⚠️</div>
      <div class="ineligible-title bilingual" data-zh="很抱歉，您可能不符合我们的服务资格" data-en="We're sorry, you may not be eligible for our service">
        ${currentLang==='zh'?'很抱歉，您可能不符合我们的服务资格':"We're sorry, you may not be eligible for our service"}
      </div>
      <div id="ineligible-reason" class="ineligible-reason"></div>
      <div class="ineligible-contact">
        <strong class="bilingual" data-zh="如有疑问或特殊情况，请联系我们的办公室：" data-en="If you have questions or special circumstances, please contact our office:">
          ${currentLang==='zh'?'如有疑问或特殊情况，请联系我们的办公室：':'If you have questions or special circumstances, please contact our office:'}
        </strong><br>
        📞 (215) 922-6156<br>✉️ vita@chinatown-pcdc.org
      </div>
    </div>` : '';

  const fillerNoticeHtml = cfg.step === 5 ? `
    <div id="filler-notice" class="notice" style="display:none;"
         data-zh="由于填表人不是主报税人本人，请填写以下联系信息。"
         data-en="Since the form filler is not the primary taxpayer, please provide the following contact information.">
      ${currentLang==='zh'?'由于填表人不是主报税人本人，请填写以下联系信息。':'Since the form filler is not the primary taxpayer, please provide the following contact information.'}
    </div>` : '';

  const backBtn = cfg.step > 1 ? `<button class="btn btn-secondary bilingual" onclick="prevStep(${cfg.step})" data-zh="← 返回" data-en="← Back">${currentLang==='zh'?'← 返回':'← Back'}</button>` : '';

  return `
  <div class="screen ${cfg.step === 1 ? 'active' : ''}" id="screen-${cfg.step}">
    <div class="card">
      <div class="card-header">
        <div class="card-step bilingual" data-zh="第${['一','二','三','四','五','六','七','八','九','十'][cfg.step-1]}步 · ${cfg.name.zh}" data-en="Step ${cfg.step} · ${cfg.name.en}">
          第${['一','二','三','四','五','六','七','八','九','十'][cfg.step-1]}步 · ${cfg.name.zh}
        </div>
        <div class="card-title bilingual" data-zh="${esc(cfg.title.zh)}" data-en="${esc(cfg.title.en)}">${esc(t(cfg.title))}</div>
        ${cfg.subtitle ? `<div class="card-sub bilingual" data-zh="${esc(cfg.subtitle.zh)}" data-en="${esc(cfg.subtitle.en)}">${esc(t(cfg.subtitle))}</div>` : ''}
      </div>
      <div class="card-body">
        ${noticeHtml}
        <div class="form-grid">
          ${cfg.questions.map(q => renderQuestion(q)).join('')}
        </div>
        ${fillerNoticeHtml}
        ${ineligibleHtml}
        <div class="form-nav">
          <div class="nav-progress bilingual" data-zh="第 ${cfg.step} 步，共 ${TOTAL_STEPS} 步" data-en="Step ${cfg.step} of ${TOTAL_STEPS}">
            第 ${cfg.step} 步，共 ${TOTAL_STEPS} 步
          </div>
          <div class="nav-btns">
            ${backBtn}
            <button class="btn btn-primary bilingual" onclick="nextStep(${cfg.step})" data-zh="下一步 →" data-en="Next →">${currentLang==='zh'?'下一步 →':'Next →'}</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function renderReviewStep() {
  return `
  <div class="screen" id="screen-${TOTAL_STEPS + 1}">
    <div class="card">
      <div class="card-header">
        <div class="card-step bilingual" data-zh="第十步 · 确认提交" data-en="Step 10 · Review & Submit">第十步 · 确认提交</div>
        <div class="card-title bilingual" data-zh="请核对您的信息" data-en="Please review your information">请核对您的信息</div>
        <div class="card-sub bilingual" data-zh="提交前请仔细核对，如需修改请点击返回。" data-en="Please review carefully before submitting. Click Back to make changes.">提交前请仔细核对，如需修改请点击返回。</div>
      </div>
      <div class="card-body" id="summary-body"></div>
    </div>
    <div style="text-align:center; padding:16px 0 40px;">
      <button class="btn btn-secondary bilingual" onclick="prevStep(${TOTAL_STEPS + 1})" style="margin-right:12px;" data-zh="← 返回修改" data-en="← Back to Edit">← 返回修改</button>
      <button class="btn btn-primary bilingual" onclick="submitForm()" id="btn-submit" style="padding:12px 32px;font-size:15px;" data-zh="提交申请 ✓" data-en="Submit Application ✓">提交申请 ✓</button>
    </div>
  </div>`;
}

function renderThankYou() {
  return `
  <div class="screen" id="screen-done">
    <div class="card">
      <div class="thankyou-wrap">
        <div class="thankyou-icon">🎉</div>
        <div class="thankyou-title bilingual" data-zh="申请已成功提交！" data-en="Application Successfully Submitted!">申请已成功提交！</div>
        <div class="thankyou-sub bilingual"
             data-zh="感谢您申请 PCDC VITA 免费在线报税服务！我们已成功收到您的申请，一封确认邮件已发送至您的邮箱。"
             data-en="Thank you for applying for PCDC VITA's free online tax filing service! We have successfully received your application and a confirmation email has been sent.">
          感谢您申请 PCDC VITA 免费在线报税服务！我们已成功收到您的申请，一封确认邮件已发送至您的邮箱。
        </div>
        <div class="thankyou-steps">
          <h3 class="bilingual" data-zh="接下来的步骤：" data-en="Next steps:">接下来的步骤：</h3>
          <div class="thankyou-step"><div class="step-badge">1</div>
            <div class="bilingual" data-zh="我们的志愿者将在一周内通过电话或电子邮件与您联系，告知后续安排。请留意来电和邮件。"
                 data-en="Our volunteers will contact you within one week by phone or email regarding next steps. Please watch for our calls and emails.">
              我们的志愿者将在一周内通过电话或电子邮件与您联系，告知后续安排。请留意来电和邮件。
            </div>
          </div>
          <div class="thankyou-step"><div class="step-badge">2</div>
            <div class="bilingual" data-zh="请提前准备好所需文件（W-2、1099、身份证、社会安全卡等）。"
                 data-en="Please prepare your documents in advance (W-2, 1099, photo ID, Social Security card, etc.).">
              请提前准备好所需文件（W-2、1099、身份证、社会安全卡等）。
            </div>
          </div>
          <div class="thankyou-step"><div class="step-badge">3</div>
            <div class="bilingual" data-zh="确认邮件中会包含文件上传链接，您也可以选择亲自来我们的服务站提交文件。"
                 data-en="The confirmation email includes a document upload link. You may also drop off documents at our service site.">
              确认邮件中会包含文件上传链接，您也可以选择亲自来我们的服务站提交文件。
            </div>
          </div>
        </div>
        <div class="contact-box">
          <strong class="bilingual" data-zh="如有疑问请联系我们：" data-en="If you have questions, contact us:">如有疑问请联系我们：</strong><br>
          📞 (215) 922-6156<br>✉️ vita@chinatown-pcdc.org<br>📍 301 N 9th St, Philadelphia, PA
        </div>
      </div>
    </div>
  </div>`;
}

function renderAllSteps() {
  const container = document.getElementById('main-container');
  container.innerHTML =
    FORM_CONFIG.map(cfg => renderStep(cfg)).join('') +
    renderReviewStep() +
    renderThankYou();
}

// ════════════════════════════════════════════════════════════
// LANGUAGE
// ════════════════════════════════════════════════════════════
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('btn-zh').classList.toggle('active', lang === 'zh');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('logo-title').textContent = lang === 'zh' ? 'VITA 免费报税' : 'VITA Free Tax Filing';
  document.getElementById('logo-sub').textContent   = lang === 'zh' ? '费城华埠发展会' : 'Philadelphia Chinatown Development Corporation';

  document.querySelectorAll('.bilingual[data-zh][data-en]').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang) || '';
  });
  document.querySelectorAll('select').forEach(sel => {
    sel.querySelectorAll('option[data-zh][data-en]').forEach(opt => {
      opt.textContent = opt.getAttribute('data-' + lang) || '';
    });
  });
  document.querySelectorAll('textarea').forEach(ta => {
    ta.placeholder = lang === 'zh' ? '选填 / Optional' : 'Optional / 选填';
  });
  if (ineligibleReasons && Object.keys(ineligibleReasons).length) updateIneligibleBox();
  buildProgress();
}

// ════════════════════════════════════════════════════════════
// PROGRESS BAR
// ════════════════════════════════════════════════════════════
function buildProgress() {
  const row = document.getElementById('steps-row');
  row.innerHTML = '';
  const allNames = [...FORM_CONFIG.map(c => c.name), { zh: '确认提交', en: 'Submit' }];
  allNames.forEach((name, i) => {
    const n = i + 1;
    if (i > 0) {
      const line = document.createElement('div');
      line.className = 'step-line' + (n - 1 < currentStep ? ' done' : '');
      row.appendChild(line);
    }
    const item = document.createElement('div');
    item.className = 'step-item';
    item.innerHTML = `
      <div class="step-num ${n < currentStep ? 'done' : n === currentStep ? 'active' : 'todo'}">${n < currentStep ? '✓' : n}</div>
      <div class="step-name${n === currentStep ? ' active' : ''}">${t(name)}</div>`;
    row.appendChild(item);
  });
}

// ════════════════════════════════════════════════════════════
// EVENTS
// ════════════════════════════════════════════════════════════
function handleRadio(groupId, val, reasonJson) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.radio-card').forEach(card => {
    card.classList.remove('selected');
    const dot = card.querySelector('.radio-indicator');
    if (dot) dot.className = 'radio-indicator';
  });
  const target = group.querySelector(`[data-val="${CSS.escape(val)}"]`);
  if (target) {
    target.classList.add('selected');
    const dot = target.querySelector('.radio-indicator');
    if (dot) dot.className = 'radio-indicator filled';
  }
  formData[groupId] = val;

  if (reasonJson) {
    const reason = JSON.parse(reasonJson);
    ineligibleReasons[groupId] = reason;
    updateIneligibleBox();
  } else {
    delete ineligibleReasons[groupId];
    updateIneligibleBox();
  }

  // Step 5: show/hide filler fields
  if (groupId === 'q-relation') {
    const isNotSelf = val !== 'Self';
    document.querySelectorAll('[id^="filler-field-"]').forEach(el => {
      el.style.display = isNotSelf ? '' : 'none';
    });
    const notice = document.getElementById('filler-notice');
    if (notice) notice.style.display = isNotSelf ? '' : 'none';
  }
}

function updateIneligibleBox() {
  const box    = document.getElementById('ineligible-box');
  const reason = document.getElementById('ineligible-reason');
  if (!box || !reason) return;
  const reasons = Object.values(ineligibleReasons);
  if (reasons.length === 0) {
    box.classList.remove('show');
  } else {
    reason.textContent = t(reasons[reasons.length - 1]);
    box.classList.add('show');
  }
}

function toggleCheck(el) { el.classList.toggle('selected'); }

function toggleTag(groupId, el) { el.classList.toggle('selected'); }

// ════════════════════════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════════════════════════
function showStep(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const id = n === 'done' ? 'screen-done' : `screen-${n}`;
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  currentStep = typeof n === 'number' ? n : TOTAL_STEPS + 1;
  buildProgress();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextStep(n) {
  if (!validateStep(n)) return;
  collectStep(n);
  if (n === TOTAL_STEPS) buildSummary();
  showStep(n + 1);
}

function prevStep(n) { showStep(n - 1); }

// ════════════════════════════════════════════════════════════
// VALIDATION
// ════════════════════════════════════════════════════════════
function validateStep(n) {
  const cfg = FORM_CONFIG[n - 1];
  if (!cfg) return true;

  const zh = currentLang === 'zh';

  // Step 1: check ineligible
  if (n === 1 && Object.keys(ineligibleReasons).length > 0) {
    alert(zh ? '您不符合服务资格，无法继续。如有疑问请联系办公室。' : 'You are not eligible for our service. Please contact our office if you have questions.');
    return false;
  }

  for (const q of cfg.questions) {
    if (!q.required) continue;

    // Skip filler fields if relation = Self
    if (q.showIfNotSelf && formData['q-relation'] === 'Self') continue;

    if (q.type === 'radio' || q.type === 'consent') {
      if (!formData[q.id]) {
        alert(zh ? '请回答所有必填问题。' : 'Please answer all required questions.');
        return false;
      }
    } else if (q.type === 'tags') {
      const el = document.getElementById(q.id);
      if (!el || !el.querySelector('.selected')) {
        alert(zh ? `请至少选择一项：${t(q.label)}` : `Please select at least one option: ${t(q.label)}`);
        return false;
      }
    } else if (q.type === 'checks') {
      // checks are optional
    } else {
      const el = document.getElementById(q.id);
      if (!el || !el.value.trim()) {
        alert(zh ? '请填写所有必填项目。' : 'Please fill in all required fields.');
        if (el) el.focus();
        return false;
      }
    }
  }
  return true;
}

// ════════════════════════════════════════════════════════════
// DATA COLLECTION
// ════════════════════════════════════════════════════════════
function collectStep(n) {
  const cfg = FORM_CONFIG[n - 1];
  if (!cfg) return;
  cfg.questions.forEach(q => {
    if (q.type === 'radio' || q.type === 'consent') {
      // already in formData via handleRadio
    } else if (q.type === 'tags') {
      const el = document.getElementById(q.id);
      if (el) formData[q.id] = [...el.querySelectorAll('.tag-btn.selected')].map(b => b.dataset.val).join(', ');
    } else if (q.type === 'checks') {
      const el = document.getElementById(q.id);
      if (el) formData[q.id] = [...el.querySelectorAll('.check-card.selected')].map(c => c.dataset.val).join(', ');
    } else {
      const el = document.getElementById(q.id);
      if (el) formData[q.id] = el.value;
    }
  });
}

// ════════════════════════════════════════════════════════════
// SUMMARY
// ════════════════════════════════════════════════════════════
function buildSummary() {
  // Collect all steps first
  FORM_CONFIG.forEach((_, i) => collectStep(i + 1));

  let html = '';
  FORM_CONFIG.forEach(cfg => {
    html += `<div class="summary-section"><div class="summary-title">${esc(t(cfg.name))}</div>`;
    cfg.questions.forEach(q => {
      if (!q.label) return;
      const val = formData[q.id] || '—';
      html += `<div class="summary-row">
        <div class="summary-key">${esc(t(q.label))}</div>
        <div class="summary-val">${esc(val)}</div>
      </div>`;
    });
    html += '</div>';
  });
  document.getElementById('summary-body').innerHTML = html;
}

// ════════════════════════════════════════════════════════════
// SUBMISSION
// ════════════════════════════════════════════════════════════
async function submitForm() {
  const btn = document.getElementById('btn-submit');
  btn.disabled = true;
  btn.textContent = currentLang === 'zh' ? '提交中...' : 'Submitting...';

  const payload = {
    fields: {
      'Residency':              formData['q-residency'],
      'Live Outside PA/NJ/DE':  formData['q-live-outside'],
      'Income Outside PA/NJ/DE': formData['q-income-outside'],
      'Business Income':         formData['q-business'],
      'Rental Income':           formData['q-rental'],
      'Crypto Transactions':     formData['q-crypto'],
      'Stock >10':               formData['q-stocks'],
      'Income >$69k':            formData['q-income'],
      'Consent TP':              formData['q-consent-tp'],
      'Consent Spouse':          formData['q-consent-sp'],
      'Gender':                  formData['f-gender'],
      'Race':                    formData['f-race'],
      'Ethnicity':               formData['f-ethnicity'],
      'English Proficiency':     formData['f-english'],
      'Disability':              formData['f-disability'],
      'Marital Status':          formData['f-marital'],
      'Housing':                 formData['f-housing'],
      'Education':               formData['f-education'],
      'Referral':                formData['f-referral'],
      'Last Name':               formData['f-last'],
      'First Name':              formData['f-first'],
      'Date of Birth':           formData['f-dob'],
      'Phone':                   formData['f-phone'],
      'Email':                   formData['f-email'],
      'Address':                 formData['f-address'],
      'City':                    formData['f-city'],
      'ZIP':                     formData['f-zip'],
      'Language':                formData['q-language'],
      'Contact Time':            formData['q-contact-time'],
      'Client Type':             formData['q-returning'],
      'Relationship':            formData['q-relation'],
      'Filler Last Name':        formData['f-filler-last'] || '',
      'Filler First Name':       formData['f-filler-first'] || '',
      'Filler Phone':            formData['f-filler-phone'] || '',
      'Filler Email':            formData['f-filler-email'] || '',
      'Tax Years':               formData['q-tax-years'],
      'NJ Resident':             formData['q-nj-resident'],
      'PA to NJ':                formData['q-pa-nj'],
      'NJ to PA':                formData['q-nj-pa'],
      'Uber/Lyft':               formData['q-uber'],
      'Homebuyer 2008':          formData['q-homebuyer'],
      'Household Size':          parseInt(formData['f-household']) || 0,
      'Dependents':              parseInt(formData['f-dependents']) || 0,
      'Documents':               formData['q-docs'] || '',
      'Zoom':                    formData['q-zoom'] || '',
      'Family at PCDC':          formData['q-family-pcdc'] || '',
      'Newsletter':              formData['q-newsletter'] || '',
      'Learn Benefits':          formData['q-benefits'] || '',
      'Notes':                   formData['f-notes'] || '',
      'Way of Service':          'Online',
      'Event':                   '2026 VITA (TY 2025)',
      'Language Submitted':      currentLang.toUpperCase()
    }
  };

  try {
    if (AIRTABLE_BASE_ID !== 'YOUR_BASE_ID') {
      const res = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE)}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Airtable error: ' + res.status);
    }
    showStep('done');
  } catch (err) {
    btn.disabled = false;
    btn.textContent = currentLang === 'zh' ? '提交申请 ✓' : 'Submit Application ✓';
    alert((currentLang === 'zh' ? '提交失败，请重试或联系办公室。\n' : 'Submission failed. Please try again or contact our office.\n') + err.message);
  }
}

// ════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════
renderAllSteps();
buildProgress();