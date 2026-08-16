import { Airpod03Icon, Laptop, Mobile, Tablet02Icon, Watch02Icon } from "@hugeicons/core-free-icons"

const categories = [
    // Mobile
    {
        id: 1,
        name: 'موبایل',
        icon: Mobile,
        category: 'mobile',
        categoryFilters: [
            // by brand
            {
                id: 1,
                label: 'برند',
                subFilter: [
                    { id: 1, label: 'گوشی سامسونگ' },
                    { id: 2, label: 'گوشی اپل' },
                    { id: 3, label: 'گوشی شیائومی' }
                ]
            },
            // by category
            {
                id: 2,
                label: 'رده‌بندی',
                subFilter: [
                    { id: 1, label: 'پرچم دار' },
                    { id: 2, label: 'میان رده' },
                    { id: 3, label: 'اقتصادی' }
                ]
            },
            // by memory
            {
                id: 3,
                label: 'حافظه',
                subFilter: [
                    { id: 1, label: 512 },
                    { id: 2, label: 256 },
                    { id: 3, label: 128 },
                    { id: 4, label: 64 }
                ]
            },
        ]
    },
    // Laptop
    {
        id: 2,
        name: 'لپ‌تاپ',
        icon: Laptop,
        category: 'laptop',
        categoryFilters: [
            // by brand
            {
                id: 1,
                label: 'برند',
                subFilter: [
                    { id: 1, label: ' لپ‌تاپ اپل(مک‌ بوک)' },
                    { id: 2, label: 'لپ‌تاپ ایسوس' },
                    { id: 3, label: 'لپ‌تاپ لنوو' },
                    { id: 4, label: 'لپ‌تاپ ایسر' },
                    { id: 5, label: 'لپ‌تاپ اچ پی' }
                ]
            },
            // by usage
            {
                id: 2,
                label: 'کاربرد',
                subFilter: [
                    { id: 1, label: 'لپ‌تاپ گیمینگ' },
                    { id: 2, label: 'لپ‌تاپ دانشجویی' },
                    { id: 3, label: 'لپ‌تاپ لمسی' },
                    { id: 4, label: 'لپ‌تاپ صنعتی' }
                ]
            },
            // by processor
            {
                id: 3,
                label: 'پردازنده',
                subFilter: [
                    { id: 1, label: "corei3" },
                    { id: 2, label: 'corei5' },
                    { id: 3, label: 'corei7' },
                    { id: 4, label: 'corei9' }
                ]
            },
        ]
    },
    // watch
    {

        id: 3,
        name: 'ساعت هوشمند',
        icon: Watch02Icon,
        category: 'watch',
        categoryFilters: [
            // by brand
            {
                id: 1,
                label: 'برند',
                subFilter: [
                    { id: 1, label: 'ساعت هوشمند اپل‌واچ' },
                    { id: 2, label: 'ساعت هوشمند سامسونگ' },
                    { id: 3, label: 'ساعت هوشمند شیائومی' }
                ]
            },
            // by usage
            {
                id: 2,
                label: 'کاربرد',
                subFilter: [
                    { id: 1, label: 'ساعت هوشمند با قابلیت مکالمه' },
                    { id: 2, label: 'ساعت هوشمند سیم کارت خور' },
                    { id: 3, label: 'ساعت هوشمند جی‌پی‌اس دار' },
                    { id: 4, label: 'ساعت هوشمند ضد آب' }
                ]
            },
            // by design
            {
                id: 3,
                label: 'طراحی',
                subFilter: [
                    { id: 1, label: "ساعت هوشمند گرد" },
                    { id: 2, label: 'ساعت هوشمند مستطیلی' }
                ]
            },
        ]
    },
    // tablet
    {
        id: 4,
        name: 'تبلت',
        icon: Tablet02Icon,
        category: 'tablet',
        categoryFilters: [
            // by brand
            {
                id: 1,
                label: 'برند',
                subFilter: [
                    { id: 1, label: 'تبلت اپل (آیپد)' },
                    { id: 2, label: 'تبلت سامسونگ' },
                    { id: 3, label: 'تبلت شیائومی' },
                    { id: 4, label: 'تبلت لنوو' },
                    { id: 5, label: 'تبلت هواوی' }
                ]
            },
            // by usage
            {
                id: 2,
                label: 'کاربرد',
                subFilter: [
                    { id: 1, label: 'تبلت دانش‌آموزی' },
                    { id: 2, label: 'تبلت قلم‌دار' },
                    { id: 3, label: 'تبلت طراحی' }
                ]
            }
        ]
    },
    // airpod
    {
        id: 5,
        name: 'هندزفری',
        icon: Airpod03Icon,
        category: 'airpod',
        categoryFilters: [
            // by brand
            {
                id: 1,
                label: 'برند',
                subFilter: [
                    { id: 1, label: 'ایرپاد' },
                    { id: 2, label: 'هندزفری سامسونگ' },
                    { id: 3, label: 'هندزفری QYC' },
                    { id: 4, label: 'هندزفری شیائومی' },
                    { id: 5, label: 'هندزفری هایلو' },
                    { id: 6, label: 'هندزفری انکر' }
                ]
            },
            // by usage
            {
                id: 2,
                label: 'کاربرد',
                subFilter: [
                    { id: 1, label: 'هندزفری سیمی' },
                    { id: 2, label: 'هندزفری گردنی' },
                    { id: 3, label: 'هندزفری فانتزی' },
                    { id: 4, label: 'هندزفری گیمینگ' },
                    { id: 5, label: 'هندزفری ورزشی' }
                ]
            }
        ]
    }
]

export default categories