document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah form dikirim secara default

            // Dalam dunia nyata, di sini Anda akan menggunakan AJAX (fetch API)
            // untuk mengirim data ke server (misalnya: menggunakan Formspree atau layanan Backend)

            // SIMULASI pengiriman sukses:
            // 1. Ambil data (opsional)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('messege').value;

            // 2. Reset formulir
            contactForm.reset();

            // 3. Tampilkan pesan sukses
            formStatus.textContent = `Terima kasih, ${name}! Pesan Anda telah diterima.`;
            formStatus.style.display = 'block';
            formStatus.style.color = 'green';

            // 4. Sembunyikan pesan setelah beberapa detik
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        });
    }
});