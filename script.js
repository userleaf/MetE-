document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. CHART.JS GRAFİKLERİ ---
    const chartRed = '#cb2027';
    const chartPalette = ['#cb2027', '#2c3e50', '#e67e22', '#27ae60', '#8e44ad', '#3498db'];

    if (document.getElementById('yksLineChart')) {
        new Chart(document.getElementById('yksLineChart'), {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Başarı Sırası',
                    data: [18948, 18223, 13604, 8660, 7310],
                    borderColor: chartRed, backgroundColor: 'rgba(203,32,39,0.15)', fill: true, tension: 0.3, pointBackgroundColor: chartRed
                }]
            },
            options: { responsive: true, plugins: { title: { display: true, text: 'Sayısal Başarı Sırası (Küçük Değer = Daha Başarılı)' } }, scales: { y: { reverse: true } } }
        });
    }

    if (document.getElementById('mezunBarChart')) {
        new Chart(document.getElementById('mezunBarChart'), {
            type: 'bar',
            data: {
                labels: ['Lisans', 'Yüksek Lisans', 'Doktora'],
                datasets: [{ label: 'Yıllık Ortalama Mezun Sayısı', data: [55, 17, 3], backgroundColor: chartPalette }]
            },
            options: { responsive: true, plugins: { legend: { display: false } } }
        });
    }

    if (document.getElementById('facultyPieChart')) {
        new Chart(document.getElementById('facultyPieChart'), {
            type: 'pie',
            data: {
                labels: ['Profesör', 'Doçent', 'Dr. Öğr. Üyesi', 'Öğretim Görevlisi', 'Araştırma Görevlisi'],
                datasets: [{ data: [11, 2, 6, 2, 20], backgroundColor: chartPalette }]
            },
            options: { responsive: true, plugins: { title: { display: true, text: 'Unvana Göre Dağılım (Toplam 41)' }, legend: { position: 'bottom' } } }
        });
    }

    if (document.getElementById('facultyBarChart')) {
        new Chart(document.getElementById('facultyBarChart'), {
            type: 'bar',
            data: {
                labels: ['Profesör', 'Doçent', 'Dr. Öğr. Üyesi', 'Öğretim Görevlisi', 'Araştırma Görevlisi'],
                datasets: [{ label: 'Kişi Sayısı', data: [11, 2, 6, 2, 20], backgroundColor: chartPalette }]
            },
            options: { responsive: true, indexAxis: 'y', plugins: { legend: { display: false }, title: { display: true, text: 'Unvana Göre Kişi Sayısı' } } }
        });
    }
    if (document.getElementById('sectorDoughnutChart')) {
        new Chart(document.getElementById('sectorDoughnutChart'), {
            type: 'doughnut',
            data: {
                labels: ['Akademik', 'Savunma Sanayi', 'Demir-Çelik ve Döküm', 'Otomotiv Sanayi', 'Enerji', 'Bilişim', 'Kompozit', 'Diğer'],
                datasets: [{
                    data: [26, 24, 18, 15, 5, 1, 1, 10],
                    backgroundColor: [
                        '#c0392b', // Kırmızı (Akademik)
                        '#2980b9', // Mavi (Savunma)
                        '#8e44ad', // Mor (Demir Çelik)
                        '#8cc63f', // Yeşil (Otomotiv)
                        '#16a085', // Turkuaz (Enerji)
                        '#f39c12', // Turuncu (Bilişim)
                        '#e67e22', // Koyu Turuncu (Kompozit)
                        '#7f8c8d'  // Gri (Diğer)
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { boxWidth: 12, font: { size: 11 } }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return ' ' + context.label + ': %' + context.raw;
                            }
                        }
                    }
                },
                cutout: '60%' // Ortası delik (Doughnut) görünümü için
            }
        });
    }

    // 2. Şehir Dağılımı Grafiği (Pie Chart)
    if (document.getElementById('cityPieChart')) {
        new Chart(document.getElementById('cityPieChart'), {
            type: 'pie',
            data: {
                labels: ['Ankara', 'İstanbul', 'İzmir', 'Kocaeli', 'Bursa', 'Eskişehir', 'Zonguldak', 'Diğer'],
                datasets: [{
                    // Orijinal grafikteki dilim büyüklüklerine göre yaklaşımlı oranlar
                    data: [45, 20, 10, 7, 7, 4, 2, 5],
                    backgroundColor: [
                        '#c0392b', // Ankara (Büyük dilim)
                        '#3498db', // İstanbul
                        '#8cc63f', // İzmir
                        '#9b59b6', // Kocaeli
                        '#f1c40f', // Bursa
                        '#34495e', // Eskişehir
                        '#1abc9c', // Zonguldak
                        '#95a5a6'  // Diğer
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: { boxWidth: 12, font: { size: 11 } }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return ' ' + context.label + ': %' + context.raw;
                            }
                        }
                    }
                }
            }
        });
    }

    // --- 2. AKADEMİK KADRO (Temel Bilgiler) ---
    // Yayınlar ve Projeler artık boş, data.csv'den otomatik doldurulacak!
    const facultyData = [
        { name: "Prof. Dr. Kadri Aydınol", title: "Bölüm Başkanı", image: "./hocalar/kadri.jpg", research: ["Enerji Depolama Malzemeleri", "Lityum İyon Bataryalar", "Elektrokimyasal Sentezleme"], details: ["Doktora: 1994, ODTÜ", "Laboratuvar: Batarya ve Enerji Depolama Lab."], publications: [], projects: [] },
        { name: "Doç. Dr. Simge Çınar Aygün", title: "Bölüm Başkan Yardımcısı", image: "./hocalar/simge.jpg", research: ["Sıvı Akış Bataryaları", "Reoloji", "Kolloid ve Yüzey Bilimi"], details: ["Doktora: 2013, Iowa State University", "Laboratuvar: Kolloid Laboratuvarı"], publications: [], projects: [] },
        { name: "Dr. Öğr. Üy. Yusuf Keleştemur", title: "Bölüm Başkan Yardımcısı", image: "./hocalar/yusufkelestemur.png", research: ["Yarıiletken Nanokristaller", "Optoelektronik Uygulamalar"], details: ["Doktora: 2017, Bilkent Üniversitesi", "Laboratuvar: Fonksiyonel Nanomalzemeler Lab."], publications: [], projects: [] },
        { name: "Prof. Dr. Abdullah Öztürk", title: "Öğretim Üyesi", image: "./hocalar/abdullah.jpg", research: ["Seramik Malzemeler", "Cam ve Cam Seramikler", "Biyoseramikler"], details: ["Doktora: 1991, University of Missouri-Rolla", "Laboratuvar: Cam Bilimi Lab."], publications: [], projects: [] },
        { name: "Prof. Dr. Arcan F. Dericioğlu", title: "Öğretim Üyesi", image: "./hocalar/arcan.jpg", research: ["Eklemeli İmalat", "Kompozit Malzemeler", "Zırh Sistemleri"], details: ["Doktora: 2002, The University of Tokyo", "Laboratuvar: Electromagnetic Materials Lab."], publications: [], projects: [] },
        { name: "Doç. Dr. Batur Ercan", title: "Öğretim Üyesi", image: "./hocalar/ercanbatur.jpg", research: ["Yüzey Mühendisliği", "Biyomalzemeler", "Doku Mühendisliği"], details: ["Doktora: 2011, Brown Üniversitesi", "Laboratuvar: Biyomalzeme ve Nanotıp Lab."], publications: [], projects: [] },
        { name: "Doç. Dr. Bilge İmer", title: "Öğretim Üyesi", image: "./hocalar/bilgeimer.jpg", research: ["MOCVD ile Nitrürlü Malzemeler", "Optik İnce Film Kaplamalar"], details: ["Doktora: 2006, UCSB, ABD", "Laboratuvar: İnce Film ve Kuantum Malzemeler Lab."], publications: [], projects: [] },
        { name: "Prof. Dr. Bilgehan Ögel", title: "Öğretim Üyesi", image: "./hocalar/bilgehan.jpg", research: ["Demir Çelik Metalurjisi", "Hasar Analizi", "Isıl İşlem"], details: ["Doktora: 1990, ODTÜ", "Laboratuvar: Bainite Research Laboratory"], publications: [], projects: [] },
        { name: "Prof. Dr. C. Hakan Gür", title: "Öğretim Üyesi", image: "./hocalar/hakangur.jpg", research: ["Kalıntı Gerilme Analizi", "Tahribatsız Muayene (NDT)"], details: ["Doktora: 1995, ODTÜ", "Laboratuvar: NDT and Welding Research Center"], publications: [], projects: [] },
        { name: "Prof. Dr. Caner Durucan", title: "Öğretim Üyesi", image: "./hocalar/canerdurucan.jpg", research: ["İleri Seramikler", "Sol-Jel Sentezi", "Optik Kaplamalar"], details: ["Doktora: 2003, Pennsylvania State University", "Laboratuvar: Bioceramics Lab."], publications: [], projects: [] },
        { name: "Prof. Dr. Cevdet Kaynak", title: "Öğretim Üyesi", image: "./hocalar/cevdet.jpg", research: ["Mühendislik Polimerleri", "Nano-Kompozitler", "Alev Geciktiriciler"], details: ["Doktora: 1994, Imperial College", "Laboratuvar: Polimerler Laboratuvarı"], publications: [], projects: [] },
        { name: "Doç. Dr. Çiğdem Toparlı", title: "Öğretim Üyesi", image: "./hocalar/cidemtoparli.png", research: ["Elektrokataliz", "Enerji Dönüşümü", "Metal Korozyonu"], details: ["Doktora: 2017, Max-Planck-Institut", "Laboratuvar: Electrochemical Energy Materials Lab."], publications: [], projects: [] },
        { name: "Prof. Dr. H. Emrah Ünalan", title: "Öğretim Üyesi", image: "./hocalar/emrah.jpg", research: ["Giyilebilir Elektronik Cihazlar", "Nanoteller", "Esnek Sensörler"], details: ["Doktora: 2006, Rutgers Üniversitesi", "Laboratuvar: Nanomalzemeler ve Elektronik Cihazlar Lab."], publications: [], projects: [] },
        { name: "Dr. Öğr. Üy. Irmak Sargın", title: "Öğretim Üyesi", image: "./hocalar/sargin.jpg", research: ["Malzeme Enformatiği", "Makine Öğrenmesi", "Akıllı Malzemeler"], details: ["Doktora: Iowa Eyalet Üniversitesi", "Laboratuvar: Materials Informatics Solutions Lab."], publications: [], projects: [] },
        { name: "Dr. Öğr. Üy. İrem Nur Gamze Özbilgin", title: "Öğretim Üyesi", image: "./hocalar/iremnurgamzeozbilgin.jpg", research: ["Sürdürülebilir Malzeme Tasarımı", "Geri Dönüşüm Teknolojileri"], details: ["Detaylı bilgi için METE web sitesini ziyaret ediniz."], publications: [], projects: [] },
        { name: "Dr. Öğr. Üy. Şeniz Uçar", title: "Öğretim Üyesi", image: "./hocalar/seniz.jpg", research: ["Kristalizasyon Kinetiği", "İleri Parçacık Dizaynı"], details: ["Doktora: 2017, NTNU, Norveç", "Laboratuvar: Kristalizasyon ve Parçacık Dizaynı Lab."], publications: [], projects: [] },
        { name: "Prof. Dr. Y. Eren Kalay", title: "Öğretim Üyesi", image: "./hocalar/eren.jpg", research: ["İleri Malzeme Karakterizasyonu", "Yüksek Entropili Alaşımlar"], details: ["Doktora: 2009, Iowa State University", "Laboratuvar: Elektron Mikroskobu Lab."], publications: [], projects: [] }
    ];

    const grid = document.getElementById('facultyGrid');
    const modal = document.getElementById('facultyModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // CSV'deki isimlerle JS'deki isimleri unvanlara takılmadan eşleştiren akıllı fonksiyon
    function isSameProfessor(name1, name2) {
        if (!name1 || !name2) return false;
        const c1 = name1.replace(/Prof\.|Dr\.|Doç\.|Öğr\.|Üy\./gi, '').trim().toLowerCase();
        const c2 = name2.replace(/Prof\.|Dr\.|Doç\.|Öğr\.|Üy\./gi, '').trim().toLowerCase();
        
        const w1 = c1.split(/\s+/).filter(w => w.length > 2);
        const w2 = c2.split(/\s+/).filter(w => w.length > 2);
        let matches = 0;
        w1.forEach(w => { if (w2.includes(w)) matches++; });
        return matches >= 2; 
    }

    // Kartları Ekrana Çizdirme Fonksiyonu
    function renderFacultyCards() {
        if (!grid) return;
        grid.innerHTML = '';
        facultyData.forEach((prof, index) => {
            const card = document.createElement('a');
            card.className = 'faculty-card'; card.href = "#";
            card.onclick = (e) => { e.preventDefault(); openModal(index); };
            
            const fallbackImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(prof.name)}&background=2c3e50&color=fff&size=128`;
            card.innerHTML = `
                <div class="faculty-img">
                    <img src="${prof.image}" alt="${prof.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='${fallbackImg}';">
                </div>
                <h3>${prof.name}</h3><p>${prof.title}</p><div class="btn-link">Profil ve Yayınlar</div>
            `;
            grid.appendChild(card);
        });
    }

    // Modal Açma ve Dinamik Verileri Yerleştirme
    function openModal(index) {
        if (!modal) return;
        const prof = facultyData[index];
        document.getElementById('modalName').innerText = prof.name;
        
        const resUl = document.getElementById('modalResearch'); resUl.innerHTML = '';
        prof.research.forEach(item => { let li = document.createElement('li'); li.innerText = item; resUl.appendChild(li); });
        
        const detUl = document.getElementById('modalDetails'); detUl.innerHTML = '';
        prof.details.forEach(item => { let li = document.createElement('li'); li.innerHTML = item.includes(':') ? `<strong>${item.split(':')[0]}:</strong> ${item.split(':')[1]}` : item; detUl.appendChild(li); });

        // Projeleri Ekrana Bas
        const projSection = document.getElementById('modalProjectsContainer');
        const projUl = document.getElementById('modalProjects');
        projUl.innerHTML = '';
        if (prof.projects && prof.projects.length > 0) {
            projSection.style.display = 'block';
            prof.projects.forEach(item => { let li = document.createElement('li'); li.innerHTML = item; projUl.appendChild(li); });
        } else { projSection.style.display = 'none'; }

        // Yayınları Ekrana Bas
        const pubSection = document.getElementById('modalPublicationsContainer');
        const pubUl = document.getElementById('modalPublications');
        pubUl.innerHTML = '';
        if (prof.publications && prof.publications.length > 0) {
            pubSection.style.display = 'block';
            prof.publications.forEach(item => { let li = document.createElement('li'); li.innerHTML = item; pubUl.appendChild(li); });
        } else { pubSection.style.display = 'none'; }

        modal.style.display = "block";
    }

    // --- 3. CSV VERİSİNİ FETCH İLE ÇEKME VE PARÇALAMA ---
    if (typeof Papa !== 'undefined') {
        Papa.parse("data.csv", {
            download: true,
            header: false,
            skipEmptyLines: true,
            complete: function(results) {
                const rows = results.data;
                let currentProfRawName = "";
                
                // İlk iki satır başlık olduğu için index 2'den başlıyoruz
                for(let i = 2; i < rows.length; i++) {
                    const row = rows[i];
                    if (row[0] && row[0].trim() !== "") { currentProfRawName = row[0].trim(); }
                    if (!currentProfRawName) continue;
                    
                    const profIndex = facultyData.findIndex(p => isSameProfessor(p.name, currentProfRawName));
                    if (profIndex !== -1) {
                        const prof = facultyData[profIndex];
                        
                        // Yayın Verisi Okuma
                        const pubName = row[4] ? row[4].trim() : "";
                        const pubYear = row[5] ? row[5].trim() : "";
                        const pubJournal = row[7] ? row[7].trim() : "";
                        const pubDOI = row[9] ? row[9].trim() : "";
                        
                        if (pubName && !prof.publications.some(p => p.includes(pubName))) {
                            let pubHtml = `<strong>${pubYear || ''}</strong> - ${pubName} <em>(${pubJournal || ''})</em>`;
                            if (pubDOI) pubHtml += ` <a href="${pubDOI}" target="_blank" style="color: var(--odtu-red); text-decoration: none; font-size: 13px; font-weight:bold;">[DOI]</a>`;
                            prof.publications.push(pubHtml);
                        }
                        
                        // Proje Verisi Okuma
                        const projType = row[1] ? row[1].trim() : "";
                        const projName = row[2] ? row[2].trim() : "";
                        const projDates = row[3] ? row[3].trim() : "";
                        
                        if (projName && !prof.projects.some(p => p.includes(projName))) {
                            prof.projects.push(`<strong>${projType}</strong>: ${projName} <em>[${projDates}]</em>`);
                        }
                    }
                }
                renderFacultyCards(); // Veriler eşleştikten sonra kartları çizdir
            },
            error: function(err) {
                console.error("CSV Dosyası Yüklenemedi:", err);
                renderFacultyCards(); // Dosya yoksa bile site çalışmaya devam etsin
            }
        });
    } else {
        renderFacultyCards(); // PapaParse yüklenemezse çökmemesi için
    }

    // --- 4. MODAL ve S.S.S OLAYLARI ---
    if (closeModalBtn) closeModalBtn.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) { panel.style.maxHeight = null; panel.classList.remove("show-last"); } 
            else { panel.style.maxHeight = panel.scrollHeight + "px"; if(this === acc[acc.length-1]) panel.classList.add("show-last"); } 
        });
    }

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-links li a");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => { if (pageYOffset >= (section.offsetTop - 150)) current = section.getAttribute("id"); });
        navLi.forEach((a) => { a.classList.remove("active"); if (a.getAttribute("href").includes(current)) a.classList.add("active"); });
    });
});
