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
                    borderColor: chartRed,
                    backgroundColor: 'rgba(203,32,39,0.15)',
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: chartRed
                }]
            },
            options: {
                responsive: true,
                plugins: { title: { display: true, text: 'Sayısal Başarı Sırası (Küçük Değer = Daha Başarılı)' } },
                scales: { y: { reverse: true } }
            }
        });
    }

    if (document.getElementById('mezunBarChart')) {
        new Chart(document.getElementById('mezunBarChart'), {
            type: 'bar',
            data: {
                labels: ['Lisans', 'Yüksek Lisans', 'Doktora'],
                datasets: [{
                    label: 'Yıllık Ortalama Mezun Sayısı',
                    data: [55, 17, 3],
                    backgroundColor: chartPalette
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } }
            }
        });
    }

    if (document.getElementById('facultyPieChart')) {
        new Chart(document.getElementById('facultyPieChart'), {
            type: 'pie',
            data: {
                labels: ['Profesör', 'Doçent', 'Dr. Öğr. Üyesi', 'Öğretim Görevlisi', 'Araştırma Görevlisi'],
                datasets: [{
                    data: [11, 2, 6, 2, 20],
                    backgroundColor: chartPalette
                }]
            },
            options: {
                responsive: true,
                plugins: { title: { display: true, text: 'Unvana Göre Dağılım (Toplam 41)' }, legend: { position: 'bottom' } }
            }
        });
    }

    if (document.getElementById('facultyBarChart')) {
        new Chart(document.getElementById('facultyBarChart'), {
            type: 'bar',
            data: {
                labels: ['Profesör', 'Doçent', 'Dr. Öğr. Üyesi', 'Öğretim Görevlisi', 'Araştırma Görevlisi'],
                datasets: [{
                    label: 'Kişi Sayısı',
                    data: [11, 2, 6, 2, 20],
                    backgroundColor: chartPalette
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                plugins: { legend: { display: false }, title: { display: true, text: 'Unvana Göre Kişi Sayısı' } }
            }
        });
    }

    // --- 2. AKADEMİK KADRO VE YAYIN VERİLERİ (GÜNCEL RESİM LİNKLERİ İLE) ---
    const facultyData = [
        {
            name: "Prof. Dr. Kadri Aydınol", title: "Bölüm Başkanı",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/_s2a9401.jpg",
            research: ["Enerji Depolama Malzemeleri", "Enerji Depolama Cihazları Tasarımı"],
            details: ["Doktora: 1994, ODTÜ", "Doktora Sonrası: 1998, MIT", "Laboratuvar: Batarya ve Enerji Depolama Cihazları Laboratuvarı"],
            publications: [
                "Morphology effect on electrochemical properties of doped (W and Mo) 622NMC, 111NMC, and 226NMC cathode materials (2020)",
                "Development of activated carbon/bimetallic transition metal phosphide composite materials for electrochemical capacitors and oxygen evolution reaction catalysis (2022)",
                "Size and morphology controlled polyol synthesis of LiFePO4 nanoparticles with addition of organic acid combinations (2024)"
            ]
        },
        {
            name: "Doç. Dr. Simge Çınar Aygün", title: "Bölüm Başkan Yardımcısı",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/simge_cinar_foto.jpg",
            research: ["Sıvı Akış Bataryaları", "Reoloji", "Kolloid ve Yüzey Bilimi", "Mikro/Nano Malzeme Sentezi", "Seramiklerin Eklemeli İmalatı"],
            details: ["Doktora: 2013, Iowa State University, ABD", "Laboratuvar: Kolloid Laboratuvarı"],
            publications: [
                "Development of High-Performance Ablative Composites: Synergistic Effects of Alumina Particles and Silica Fabric in the Polybenzoxazine Matrix (2025)",
                "Waterbased electrically conductive adhesive for PERC-type shingled solar cells (2025)",
                "Bismuth-Tin Core–Shell Particles From Liquid Metals: A Novel, Highly Efficient Photothermal Material that Combines Broadband Light Absorption with Effective Light-to-Heat Conversion (2024)"
            ]
        },
        {
            name: "Dr. Öğr. Üy. Yusuf Keleştemur", title: "Bölüm Başkan Yardımcısı",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/yusufkelestemur.png",
            research: ["Kolloidal Yarıiletken Nanokristaller", "Yarıiletken Nanokristallerin Sentezi", "Optoelektronik Uygulamalar"],
            details: ["Doktora: 2017, Bilkent Üniversitesi", "Doktora Sonrası: ETH Zürich", "Laboratuvar: Fonksiyonel Nanomalzemeler Laboratuvarı"],
            publications: [
                "Zinc Chalcogenide Based Shell Layers for Colloidal Quantum Wells (2025)",
                "Direct synthesis of zinc-blende ZnSe nanoplatelets (2024)",
                "Tattoo-like multi-color physically unclonable functions (2024)"
            ]
        },
        {
            name: "Prof. Dr. Abdullah Öztürk", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/_s2a9895_0.jpg",
            research: ["Seramik Malzemeler", "Yapısal Seramikler", "Cam ve Cam Seramikler", "Fotokatalitik Malzemeler"],
            details: ["Doktora: 1991, University of Missouri-Rolla, ABD", "Laboratuvar: Cam Bilimi ve Fotokatalitik Malzemeler Lab."],
            publications: [
                "Production and biological properties of nano porous glass microparticles for anticancer drug carrier (2024)",
                "Effects of fluorination and thermal shock on the photocatalytic activity of Bi2O3 nanopowders (2021)",
                "In vitro evaluation of tooth-colored yttria stabilized zirconia ceramics (2021)"
            ]
        },
        {
            name: "Prof. Dr. Arcan F. Dericioğlu", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/adericioglu.jpg",
            research: ["Elektromanyetik Dalgalarla Madde Etkileşimi", "Alaşımların Eklemeli İmalatı"],
            details: ["Doktora: 2002, The University of Tokyo, Japonya", "Laboratuvar: Electromagnetic Materials Laboratory"],
            publications: [
                "Effect of CNT impregnation on the mechanical and thermal properties of C/C-SiC composites (2020)",
                "Selective laser melting of Nano-TiN reinforced 17-4 PH stainless steel: Densification, microstructure and mechanical properties (2022)",
                "Influence of the heat treatment on the microstructure, mechanical and high-temperature oxidation behavior of Hastelloy X alloy fabricated via laser powder bed fusion (2025)"
            ]
        },
        {
            name: "Doç. Dr. Batur Ercan", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/ercanbatur.jpg",
            research: ["Anodizasyon", "Yüzey Modifikasyonları", "Biyomalzemeler", "Doku Mühendisliği"],
            details: ["Doktora: 2011, Brown Üniversitesi", "Doktora Sonrası: Harvard Tıp & Northeastern", "Laboratuvar: Biyomalzeme ve Nanotıp Laboratuvarı"],
            publications: [
                "Synthesis of calcium carbonate microspheres via inert gas bubbling for orthopedic applications (2020)",
                "Mineral-doped poly(L-lactide) acid scaffolds enriched with exosomes improve osteogenic commitment of human adipose-derived mesenchymal stem cells (2020)",
                "Magnetic and luminescence properties of bioactive glass nanoparticles for biomedical applications (2025)"
            ]
        },
        {
            name: "Doç. Dr. Bilge İmer", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/bilgeimer.jpg",
            research: ["MOCVD ile Nitrürlü Malzemeler", "CVD/PVD ile Yarıiletken Optoelektronik", "Optik ve Yapısal İnce Film Kaplamalar"],
            details: ["Doktora: 2006, UCSB, ABD", "Laboratuvar: İnce Film, Optoelektronik ve Kuantum Malzemeler Lab."],
            publications: []
        },
        {
            name: "Prof. Dr. Bilgehan Ögel", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/_s2a7364.jpg",
            research: ["Mikroyapı-Özellik İlişkisi", "Hasar Analizi", "Metallerin Isıl İşlemi", "Toz Metalurjisi"],
            details: ["Doktora: 1990, ODTÜ", "Laboratuvar: Bainite Research Laboratory"],
            publications: []
        },
        {
            name: "Prof. Dr. C. Hakan Gür", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/chg_ekim_2024.jpg",
            research: ["Isıl İşlem", "Mekanik Metalurji", "Kalıntı Gerilme", "Tahribatsız Muayene"],
            details: ["Doktora: 1995, ODTÜ", "Doktora Sonrası: BAM-Berlin", "Laboratuvar: NDT and Welding Research Center"],
            publications: [
                "A Sustainable Strategy for Wire Arc Additive Manufacturing of High-Performance Duplex Stainless Steel: Microstructural Refinement and Mechanical Anisotropy Reduction (2025)",
                "Investigation of Travel Speed Effects on Microstructure and Corrosion Behavior of Duplex Stainless Steel in Wire-Based DED Additive Manufacturing (2025)",
                "Non-Destructive Determination of Surface Residual Stresses in Electron Beam Welded AISI 410 Martensitic Stainless Steel Using the Magnetic Barkhausen Noise Technique (2025)"
            ]
        },
        {
            name: "Prof. Dr. Caner Durucan", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/canerdurucan.jpg",
            research: ["Seramik ve Cam Malzemeler", "Biyoseramikler"],
            details: ["Doktora: 2003, Pennsylvania State University, ABD", "Laboratuvar: Bioceramics and Materials Chemistry Laboratory"],
            publications: [
                "Functionalization of glass fiber woven fabrics by indium tin oxide (ITO) coatings for electromagnetic wave absorption (2023)",
                "Decellularized adipose tissue matrix-coated and simvastatin-loaded hydroxyapatite microspheres for bone regeneration (2022)",
                "Complete chemical and structural characterization of selenium-incorporated hydroxyapatite (2022)"
            ]
        },
        {
            name: "Prof. Dr. Cevdet Kaynak", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/2016-06.jpg",
            research: ["Polimerler", "Makro, Mikro ve Nano-Kompozitler"],
            details: ["Doktora: 1994, Imperial College, İngiltere", "Laboratuvar: Polimerler ve Kompozitler Laboratuvarı"],
            publications: [
                "Obtaining Cellulose Nanocrystals by Acid Hydrolysis Procedure; and Their Use as Reinforcement in Polylactide Biocomposites (2025)",
                "Contribution of Cellulose Nanofibrils on the Strengthening and Toughening of Neat and Blended Polylactide Specimens; and the Differences After 3D-Printing (2024)",
                "Parameters Influencing Electrospun Nanofiber Diameter of Polylactide Incorporated with Cellulose Nanofibrils and Nanocrystals (2024)"
            ]
        },
        {
            name: "Doç. Dr. Çiğdem Toparlı", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/cidem_toparli.png",
            research: ["Elektrokimya", "Elektrokataliz", "Enerji Dönüşümü ve Depolama", "Korozyon"],
            details: ["Doktora: 2017, Max-Planck-Institut, Almanya", "Doktora Sonrası: MIT", "Laboratuvar: Laboratory for Electrochemical Energy Materials"],
            publications: [
                "Optimizing cation synergy in high entropy oxides for superior bifunctional oxygen electrocatalysis (2025)",
                "Mitigating Hydrogen Ingress with Thin Cloaking Liquid Barrier Films (2025)",
                "Earth-Abundant Divalent Cation High-Entropy Spinel Ferrites as Bifunctional Electrocatalysts for Oxygen Evolution and Reduction Reactions (2024)"
            ]
        },
        {
            name: "Prof. Dr. H. Emrah Ünalan", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/_s2a1059_0.jpg",
            research: ["Nanomalzemeler", "Elektronik Cihazlar"],
            details: ["Doktora: 2006, Rutgers Üniversitesi, ABD", "Doktora Sonrası: Cambridge Üniversitesi", "Laboratuvar: Nanomalzemeler ve Elektronik Cihazlar Laboratuvarı"],
            publications: [
                "Two-Dimensional Titanium Disulfide Nanosheets for Enhanced Capacity of Zinc-Ion Capacitors (2025)",
                "Surface Engineering of MXene and Functional Fullerenols for Cancer Biomarker 'eIF3d' (2025)",
                "Triboelectric nanogenerators from fundamentals to applications (2025)"
            ]
        },
        {
            name: "Dr. Öğr. Üy. Irmak Sargın", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/sargin_photo.jpg",
            research: ["Malzeme Enformatiği", "Akıllı Malzemeler", "Zırh Malzemeleri", "Kritik Malzemeler"],
            details: ["Doktora: Iowa Eyalet Üniversitesi", "Doktora Sonrası: MIT", "Laboratuvar: Materials Informatics Solutions (MISLab)"],
            publications: [
                "Putting error bars on density functional theory (2024)",
                "Mapping of composition-rheology relationships in polymer composite-type precursors (2024)",
                "Multivariate analysis: An essential for studying complex glasses (2022)"
            ]
        },
        {
            name: "Dr. Öğr. Üy. İrem Nur Gamze Özbilgin", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Files/iremnurgamzeozbilgin.jpg",
            research: ["Malzeme Bilimi ve Mühendisliği Temel Uygulamaları", "Sürdürülebilir Malzemeler"],
            details: ["Detaylı profil bilgisi için METE web sitesini ziyaret edebilirsiniz."],
            publications: []
        },
        {
            name: "Dr. Öğr. Üy. Şeniz Uçar", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/visitingResearchers/_s2a1059.jpg",
            research: ["Kristalizasyon", "Parçacık Dizaynı"],
            details: ["Doktora: 2017, NTNU, Norveç", "Laboratuvar: Kristalizasyon ve Parçacık Dizaynı (CPD Lab)"],
            publications: [
                "Predicting Silica Deposition from Superheated, Pressurized Steam Using Numerical Modeling of Nucleation, Agglomeration and Deposition (2023)",
                "Exploiting Saturation Regimes and Surface Effects to Tune Composite Design: Single Platelet Nanocomposites of Peptoid Nanosheets and CaCO3 (2024)",
                "Optimizing lithium carbonate recovery through gas-liquid reactive crystallization of lithium hydroxide and carbon dioxide (2025)"
            ]
        },
        {
            name: "Prof. Dr. Y. Eren Kalay", title: "Öğretim Üyesi",
            image: "https://mete.metu.edu.tr/system/files/Images/peoplePhotos/faculty/_s2a9557.jpg",
            research: ["Malzeme Karakterizasyonu", "Metalik Alaşımlar", "Elektronik Paketleme"],
            details: ["Doktora: 2009, Iowa State University, ABD", "Laboratuvar: Metal Alaşımları Geliştirme Elektron Mikroskobu Lab."],
            publications: [
                "Temperature-dependent evolution of Al-Ge microstructures for wafer-level vacuum packaging of MEMS devices (2025)",
                "Development of novel high entropy alloy feedstocks for powder bed fusion using equimolar CoFeNiCuMn composition (2024)",
                "Microstructure and Mechanical Properties of CoFeNiCuMn High-Entropy Alloys Produced by Laser Powder Bed Fusion (2024)"
            ]
        }
    ];

    // --- 3. DOM MANİPÜLASYONLARI (KARTLAR, MODAL VE FOTOĞRAFLAR) ---
    const grid = document.getElementById('facultyGrid');
    const modal = document.getElementById('facultyModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    if (grid) {
        facultyData.forEach((prof, index) => {
            const card = document.createElement('a');
            card.className = 'faculty-card';
            card.href = "#";
            card.onclick = (e) => {
                e.preventDefault();
                openModal(index);
            };
            
            // Eğer resim hiçbir şekilde yüklenemezse çalışacak baş harf jeneratörü
            const fallbackImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(prof.name)}&background=2c3e50&color=fff&size=128`;
            
            card.innerHTML = `
                <div class="faculty-img">
                    <img src="${prof.image}" alt="${prof.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src='${fallbackImg}';">
                </div>
                <h3>${prof.name}</h3>
                <p>${prof.title}</p>
                <div class="btn-link">Profil ve Yayınlar</div>
            `;
            grid.appendChild(card);
        });
    }

    function openModal(index) {
        if (!modal) return;
        const prof = facultyData[index];
        document.getElementById('modalName').innerText = prof.name;
        
        const resUl = document.getElementById('modalResearch');
        resUl.innerHTML = '';
        prof.research.forEach(item => {
            let li = document.createElement('li');
            li.innerText = item;
            resUl.appendChild(li);
        });
        
        const detUl = document.getElementById('modalDetails');
        detUl.innerHTML = '';
        prof.details.forEach(item => {
            let li = document.createElement('li');
            li.innerHTML = `<strong>${item.split(':')[0]}:</strong> ${item.split(':')[1] || ''}`;
            if(item.indexOf(':') === -1) li.innerHTML = item; // fallback
            detUl.appendChild(li);
        });

        const pubSection = document.getElementById('modalPublicationsContainer');
        const pubUl = document.getElementById('modalPublications');
        pubUl.innerHTML = '';
        
        if (prof.publications && prof.publications.length > 0) {
            pubSection.style.display = 'block';
            prof.publications.forEach(item => {
                let li = document.createElement('li');
                li.innerHTML = `&bull; ${item}`;
                pubUl.appendChild(li);
            });
        } else {
            pubSection.style.display = 'none';
        }

        modal.style.display = "block";
    }

    if (closeModalBtn) {
        closeModalBtn.onclick = function() {
            modal.style.display = "none";
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Akordiyon (S.S.S) Mantığı
    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                panel.classList.remove("show-last");
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                if(this === acc[acc.length-1]) panel.classList.add("show-last");
            } 
        });
    }

    // Sol Menü Aktif Link İşaretleme
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-links li a");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute("id");
            }
        });
        navLi.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href").includes(current)) {
                a.classList.add("active");
            }
        });
    });
});
