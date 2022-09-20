const navItems = [
    { title: 'درباره من', scrollTo: 'about' },
    { title: 'نمونه کار', scrollTo: 'projects' },
    { title: 'اطلاعات تماس', scrollTo: 'contact' },
    { title: 'رزومه', scrollTo: 'cv' },
]
const data = [
    {
        id: 'about', title: 'درباره من', content: {
            text: `۱ سال سابقه (شامل کارآموزی) Frontend در شرکت بامدادتک
        فارغ التحصیل دانشگاه علم و فرهنگ تهران در رشته مهندسی کامپیوتر گرایش نرم افزار`, pdfUrl: "https://drive.google.com/file/d/1aePBnJp0uzRtmvWnxODQ_l3DO_weVlbu/preview#page#toolbar=0&scrollbar=0"
        }
    },
    {
        id: 'projects', title: 'نمونه کار', content: [
            { title: ' پروژه تمرینی Login & SignUp pages' , text: `اولین پروژه تمرینی در شرکت بامدادتک صفحه ورود و ثبت نام با قابلیت بازیابی رمز عبور و validation handling تمامی فیلد ها ، نمایش ارور های مربوط به سرور و .... با React Js`, pdfUrl: "https://drive.google.com/file/d/1ZlWA2Vzm02MYZccjAOX4yaoTrVQ-FiTv/preview#page#toolbar=0&scrollbar=0" },
            { title: 'test2' }
        ]
    },
    { id: 'contact', title: 'اطلاعات تماس', content: '' },
    { id: 'cv', title: 'رزومه ها', content: '' },

]