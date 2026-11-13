// بيانات الصور الخاصة بكل حدث (4 صور لكل حدث من الأحداث الأربعة المطلوبة)
const galleryData = {
    sports: {
        title: "اليوم الرياضي السنوي",
        images: [
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=600&q=80"
        ]
    },
    biomedical: {
        title: "فعاليات كلية الهندسة الطبية",
        images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
        ]
    },
    computers: {
        title: "مؤتمر كلية هندسة الحاسبات",
        images: [
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
        ]
    },
    communications: {
        title: "أنشطة كلية الاتصالات",
        images: [
            "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
        ]
    }
};

// وظيفة فتح المعرض المنبثق
function openGallery(eventType) {
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImages = document.getElementById('modalImages');
    
    const event = galleryData[eventType];
    if (!event) return;

    modalTitle.textContent = event.title;
    modalImages.innerHTML = '';

    event.images.forEach(imgUrl => {
        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = event.title;
        modalImages.appendChild(img);
    });

    modal.style.display = 'block';
}

// وظيفة إغلاق المعرض المنبثق
function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
}

// إغلاق المعرض عند النقر خارج المحتوى
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// قائمة الهاتف المحمول
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('navLinks');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// نموذج الاتصال
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لك! تم إرسال مقترحك إلى إدارة اتحاد طلاب جامعة حورس بنجاح.');
        contactForm.reset();
    });
}
