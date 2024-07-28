document.addEventListener('DOMContentLoaded', function () {
    var popup = document.getElementById('popup');
    var closeBtn = document.querySelector('.close-btn');
    var saveContactBtn = document.getElementById('saveContactBtn');

    closeBtn.addEventListener('click', function () {
        popup.classList.add('hidden');
    });

    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.classList.add('hidden');
        }
    });

    saveContactBtn.addEventListener('click', function () {
        var vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Prakash
TEL;TYPE=CELL:8143350735
END:VCARD
        `;
        var blob = new Blob([vCardData], { type: 'text/vcard' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'Prakash.vcf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
