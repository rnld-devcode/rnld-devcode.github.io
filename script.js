document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form dikirim secara default

            // 1. Ambil data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // 2. Reset formulir
            contactForm.reset();

            // 3. Tampilkan pesan sukses
            if (formStatus) {
                formStatus.textContent = `Terima kasih, ${name}! Pesan Anda telah diterima.`;
                formStatus.style.display = 'block';
                formStatus.style.color = 'green';
                formStatus.style.marginTop = '15px';
                formStatus.style.textAlign = 'center';

                // 4. Sembunyikan pesan setelah beberapa detik
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }
        });
    }
});