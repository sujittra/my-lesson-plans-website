/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // บอกให้สแกนไฟล์ index.html ที่อยู่ใน root
    // หากคุณมีไฟล์ HTML, JS, หรือไฟล์อื่นๆ ที่ใช้คลาส Tailwind ในโฟลเดอร์อื่น
    // ก็สามารถเพิ่ม path เข้าไปได้ เช่น "./pages/**/*.{html,js}", "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {
      // คุณสามารถเพิ่มหรือแก้ไข theme ของ Tailwind ได้ที่นี่
      // ตัวอย่าง: ตั้งค่าฟอนต์ Sarabun เป็นฟอนต์หลักสำหรับ sans-serif
      fontFamily: {
        sans: ['Sarabun', 'Arial', 'sans-serif'], // ใส่ Sarabun และ fallback fonts
      },
    },
  },
  plugins: [],
}