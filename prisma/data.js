const locations = [
    {
        icon: 'ubs',
        lat: -3.0953672,
        lng: -60.0042222,
        title: 'UBS S-50',
        time: 'Seg a Sex das 08:00h ÀS 17:00h',
        address: 'Rua Gabriel Gonçalves - Aleixo'
    },
    {
        icon: 'ubs',
        lat: -3.0993425,
        lng: -60.0006586,
        title: 'UBS S-51',
        time: 'Seg a Sex das 08:00h às 17:00h',
        address: 'R. Atagamita - Aleixo'
    },
    {
        icon: 'ubs',
        lat: -3.11249,
        lng: -60.02178,
        title: 'UBS Dr. Luiz Montenegro',
        time: 'Seg a Sex das 06:00h às 18:00h',
        address: 'R. Pico das Águas, 527 - Nossa Sra. das Gracas'
    },
    {
        icon: 'ubs',
        lat: -3.08747,
        lng: -60.02682,
        title: 'UBS - Dr José Rayol dos Santos',
        time: 'Seg a Sex das 06:00h às 20:30h e Sáb das 08:00 às 20:30h',
        address: 'Av. Constantino Nery, s/n - Flores, Manaus'
    },
    {
        icon: 'ubs',
        lat: -3.10584,
        lng: -60.02994,
        title: 'UBS O-25 ',
        time: 'Seg a Sex das 08:00h às 18:00h',
        address: 'R. Ambrósio Aires, 104 - São Jorge, Manaus'
    },
    {
        icon: 'ubs',
        lat: -3.11336,
        lng: -60.02816,
        title: 'UBS S-05 ',
        time: 'Seg a Sex das 08:00h às 17:00h',
        address: 'R. Pico das Águas, S/N,, R. Pico das Águas, 88 - São Geraldo'
    },
    {
        icon: 'ubs',
        lat: -3.11224,
        lng: -60.03306,
        title: 'UBS Rayol Dos Santos',
        time: 'Seg a Sex das 06:00h às 17:00h',
        address: 'R. Manoel Batista - São Jorge'
    },
    {
        icon: 'ubs',
        lat: -3.02677,
        lng: -59.95282,
        title: 'UBS N-06',
        time: 'Seg a Sex das 06:00h às 17:00h',
        address: 'R. Bias Fortes - Cidade de Deus, Manaus - AM, 69099-009'
    },
    {
        icon: 'ubs',
        lat: -3.03962,
        lng: -59.94281,
        title: 'UBS N-37',
        time: 'Seg a Sex das 06:00h às 17:00h',
        address: 'R. Joaquim Martins Santana - Amazonino Mendes - Novo Aleixo, Manaus - AM, 69099-068'
    },
    {
        icon: 'ubs',
        lat: -3.08282,
        lng: -59.94076,
        title: 'UBS N-37',
        time: 'Seg a Sex das 06:00h às 17:00h',
        address: 'R. Nestor Paes - Zumbi 2, Manaus - AM, 69084-621'
    },
    {
        icon: 'spa',
        lat: -3.0892547,
        lng: -59.9814582,
        title: 'SPA Coroado',
        time: '24h',
        address: 'Av. Beira Mar - Coroado'
    },
    {
        icon: 'spa',
        lat: -3.07997,
        lng: -60.03527,
        title: 'SPA Alvorada',
        time: '24h',
        address: 'R. Loris Cordovil - Alvorada'
    },
    {
        icon: 'spa',
        lat: -3.12732,
        lng: -60.03725,
        title: 'SPA São Raimundo',
        time: '24h',
        address: 'Praça Ismael Benígno, 155 - São Raimundo'
    },
    {
        icon: 'spa',
        lat: -3.02976,
        lng: -59.97643,
        title: 'SPA e Policlínica Danilo Corrêa',
        time: '24h',
        address: 'Av. Noel Nutels, s/n - Cj. Cidade Nova I'
    },
    {
        icon: 'spa',
        lat: -3.01396,
        lng: -59.99084,
        title: 'SPA do GALILEIA',
        time: '24h',
        address: 'Av. Samaúma - Cidade Nova'
    },
    {
        icon: 'spa',
        lat: -3.05155,
        lng: -60.04613,
        title: 'SPA Redenção',
        time: '24h',
        address: 'R. Maracanã, 13 - Redenção'
    },
    {
        icon: 'upa',
        lat: -3.00148,
        lng: -60.04316,
        title: 'UPA 24h Campos Sales',
        time: '24h',
        address: 'Av. Dona Otília, 649 - Tarumã'
    },
    {
        icon: 'upa',
        lat: -3.02915,
        lng: -59.95739,
        title: 'UPA Cidade Nova V',
        time: '24h',
        address: 'Av. Camapuã, 1424 - Nossa Senhora De Fatima'
    },
    {
        icon: 'upa',
        lat: -3.10959,
        lng: -59.96182,
        title: 'UPA Distrito',
        time: 'Seg a Sex das 07:00h às 19:00h',
        address: 'Av. Buriti, 3727 - Distrito Industrial I'
    },
    {
        icon: 'hos',
        lat: -3.1019,
        lng: -60.01415,
        title: 'Hospital e Pronto Socorro 28 de Agosto',
        time: '24h',
        address: 'Av. Mário Ypiranga, 1581 - Adrianópolis'
    },
    {
        icon: 'hos',
        lat: -3.07412,
        lng: -59.96227,
        title: 'Hospital e Pronto Socorro Dr. João Lúcio Pereira Machado',
        time: '24h',
        address: 'Av. Cosme Ferreira, 3937 - Coroado'
    },
    {
        icon: 'hos',
        lat: -3.05428,
        lng: -60.006,
        title: 'Hospital Nilton Lins',
        time: '24h',
        address: 'Av. Prof. Nilton Lins, 3259 - Flores'
    },
    {
        icon: 'hos',
        lat: -3.1164,
        lng: -60.01893,
        title: 'Hospital Universitário Getúlio Vargas',
        time: '24h',
        address: 'R. Tomas de Vila Nova, 300 - Centro'
    },
    {
        icon: 'hos',
        lat: -3.1188816,
        lng: -60.0056021,
        title: 'Hospital Adriano Jorge',
        time: '24h',
        address: 'Av. Carvalho Leal, 1778 - Cachoeirinha'
    },
    {
        icon: 'hos',
        lat: -3.09445,
        lng: -60.05735,
        title: 'Hospital e Pronto Socorro da Criança',
        time: '24h',
        address: 'Av. Brasil, 989 - Compensa'
    },
    {
        icon: 'hos',
        lat: -3.08605,
        lng: -60.02719,
        title: 'Hospital Hemoam',
        time: '24h',
        address: 'Av. Pedro Teixeira - Dom Pedro'
    }
]

exports.locations = locations