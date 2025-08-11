/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        kitsch: {
          pink: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
          },
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
          },
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
          },
          peach: {
            50: '#fef7ee',
            100: '#fdedd6',
            200: '#fbd7ad',
            300: '#f8bb84',
            400: '#f59e5b',
            500: '#f28532',
          }
        },
        gradient: {
          'pink-orange': 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #eab308 100%)',
          'blue-purple': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
          'green-blue': 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
          'purple-pink': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
          'soft-pink-purple': 'linear-gradient(135deg, #fdf2f8 0%, #f3e8ff 50%, #dbeafe 100%)',
          'soft-peach-pink': 'linear-gradient(135deg, #fef7ee 0%, #fce7f3 50%, #f3e8ff 100%)',
          'soft-purple-peach': 'linear-gradient(135deg, #faf5ff 0%, #fef7ee 50%, #fce7f3 100%)',
          'soft-blue-pink': 'linear-gradient(135deg, #eff6ff 0%, #fdf2f8 50%, #fce7f3 100%)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 2s infinite',
        'kitsch-float': 'kitschFloat 4s ease-in-out infinite',
        'kitsch-pulse': 'kitschPulse 3s ease-in-out infinite',
        'kitsch-rotate': 'kitschRotate 6s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        kitschFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(2deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0deg)' },
          '75%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        kitschPulse: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1) rotate(180deg)', opacity: '0.8' },
        },
        kitschRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'kitsch': '0 4px 20px -5px rgba(236, 72, 153, 0.15), 0 8px 25px -5px rgba(139, 92, 246, 0.1)',
        'kitsch-glow': '0 0 30px rgba(236, 72, 153, 0.2), 0 0 60px rgba(139, 92, 246, 0.1)',
      },
      backgroundImage: {
        'kitsch-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f472b6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
