import { prisma } from "./lib/prisma";

async function main() {
    await prisma.product.createMany({
        data: [
            {
                imageUrl: 'https://nuitbrr234.ufs.sh/f/uZJMHWA2DIMwSV0TVlW0A8TNOI9gfRxKkriZ1GFQua32d7Xb',
                name: 'گوشی موبایل اپل iPhone 17 Pro Max ZA/A ظرفیت 256 گیگابایت رم 12 گیگابایت - Not Active رجیستر شده',
                price: 259600000,
                discount: 0,
                categoryId: 'a0e26a69-50e2-4160-b5fc-3077ae6cbf1f'
            },
            {
                imageUrl: 'https://nuitbrr234.ufs.sh/f/uZJMHWA2DIMwzlvAWJZxW7GFQMhqRKo9XPwcLZfg4pb3dy8T',
                name: 'لپ تاپ 14.2 اینچی اپل مدل MacBook Pro MX2H3 2024 M4 (پارت نامبر LL/A) پک اصلی نات اکتیو',
                price: 209000000,
                discount: 5,
                categoryId: '7bd356fc-8788-40ea-9e6f-7a1fb8a5a5e9'
            },
            {
                imageUrl: 'https://nuitbrr234.ufs.sh/f/uZJMHWA2DIMwmhMUHS4UqBXnzPjDCrS9QF8s6WmVuG4Ke2iN',
                name: 'ساعت هوشمند اپل واچ (SE (Gen 3 سایز 40 میلی متر 2025',
                price: 32700000,
                discount: 0,
                categoryId: 'eff33659-7b41-4214-9322-5e2e64ad1761'
            }
        ]

    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });