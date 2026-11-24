
/* ============ ISI BAGIAN INI ============ */
const CONFIG = {
    nama: "",                    // nama pacar
    dari: "@Aku",                // tanda tangan di surat

    foto: [                      // anda bisa menambahkan/mengganti foto di kode ini
        {
            src: "imeg/88s.jfif",
            caption: "Kenangan pertama"
        },
        {
            src: "imeg/22s.jfif",
            caption: "Senyummu favoritku"
        },
        {
            src: "imeg/33s.jfif",
            caption: "Hari yang seru"
        },
        {
            src: "imeg/44s.jfif",
            caption: "Selalu bareng ya"
        }
    ],

    surat: [                     // anda bisa menambahkan/mengganti surat di kode ini
        {
            judul: "Untukmu, ",
            isi: "Selamat ulang tahun, 🎂\n\nisi.\n\nisi."
        },
        {
            judul: "Doaku Untukmu",
            isi: "Semoga kamu selalu sehat, dan bahagia.\n\nisi.\n\nI love you ❤️"
        }
    ]
};
/* ======================================== */

const $ = s => document.querySelector(s),
      R = (a, b) => a + Math.random() * (b - a);

$('#nm').textContent = CONFIG.nama;


/* ============ FOTO PENGGANTI ============ */
const ph = i => {
    const c = [
        ['#ff9a9e', '#fad0c4'],
        ['#a18cd1', '#fbc2eb'],
        ['#84fab0', '#8fd3f4'],
        ['#ffecd2', '#fcb69f']
    ][i % 4];

    return 'data:image/svg+xml,' + encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
            <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="${c[0]}"/>
                    <stop offset="1" stop-color="${c[1]}"/>
                </linearGradient>
            </defs>
            <rect width="400" height="400" fill="url(#g)"/>
            <text x="200" y="240" font-size="130" text-anchor="middle">💖</text>
        </svg>
    `);
};


/* ============ BINTANG & HATI MELAYANG ============ */
for (let i = 0; i < 70; i++) {
    const s = document.createElement('i'),
          z = R(1, 3);

    s.style.cssText = `
        left: ${R(0, 100)}%;
        top: ${R(0, 100)}%;
        width: ${z}px;
        height: ${z}px;
        animation-delay: ${R(0, 3)}s;
        animation-duration: ${R(2, 5)}s
    `;

    $('#sky').append(s);
}

setInterval(() => {
    if (document.hidden) return;

    const h = document.createElement('span');

    h.textContent = ['♥', '♡', '✦'][Math.floor(R(0, 3))];

    h.style.cssText = `
        position: absolute;
        left: ${R(0, 100)}%;
        bottom: -30px;
        font-size: ${R(12, 30)}px;
        color: ${['#ff8fb8', '#ffc2dd', '#d9b8ff', '#ffe08a'][Math.floor(R(0, 4))]};
        opacity: .7
    `;

    $('#hearts').append(h);

    h.animate(
        [
            {
                transform: 'translateY(0) rotate(0)',
                opacity: 0
            },
            {
                opacity: .7,
                offset: .1
            },
            {
                transform: `translateY(-115vh) rotate(${R(-40, 40)}deg)`,
                opacity: 0
            }
        ],
        {
            duration: R(8000, 14000)
        }
    ).onfinish = () => h.remove();

}, 650);


/* ============ TOPPING KUE ============ */
function topping(sel, list, d0) {
    const t = $(sel);

    list.forEach((e, i) => {
        const s = document.createElement('span');

        s.className = 'tp';
        s.textContent = e[0];
        s.style.left = e[1] + '%';
        s.style.setProperty('--d', (d0 + i * .12) + 's');

        t.append(s);
    });

    for (let i = 0; i < 9; i++) {
        const s = document.createElement('i');

        s.className = 'sp';

        s.style.cssText = `
            left: ${R(4, 94)}%;
            top: ${R(12, 26)}px;
            background: ${['#fff', '#ffe066', '#6fe3ff', '#ff5d8f'][i % 4]};
            rotate: ${R(0, 180)}deg;
            --d: ${d0 + R(0, .8)}s
        `;

        t.append(s);
    }
}

topping('.t1', [
    ['🍓', 6],
    ['🍓', 28],
    ['🍓', 52],
    ['🍓', 76]
], 2.7);

topping('.t2', [
    ['🍬', 8],
    ['🍓', 36],
    ['🍬', 60],
    ['🍓', 80]
], 2.9);

topping('.t3', [
    ['🍒', 8],
    ['🍒', 70]
], 3.1);


/* ============ SKALA LAYAR ============ */
const fit = () => {
    $('#fit').style.setProperty(
        '--s',
        Math.min(innerWidth / 380, innerHeight * .7 / 520, 1.6)
    );
};

fit();
addEventListener('resize', fit);


/* ============ CONFETTI ============ */
function burst(x, y, n) {
    for (let i = 0; i < n; i++) {
        const c = document.createElement('i');

        c.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 8px;
            height: 12px;
            z-index: 30;
            pointer-events: none;
            background: ${['#ff6fa5', '#ffd86b', '#8fd3f4', '#b79cff', '#7dffb3'][i % 5]}
        `;

        document.body.append(c);

        const dx = R(-220, 220),
              dy = R(-300, -80);

        c.animate(
            [
                {
                    transform: 'translate(0,0) rotate(0)'
                },
                {
                    transform: `translate(${dx}px,${dy}px) rotate(${R(200, 600)}deg)`,
                    offset: .45
                },
                {
                    transform: `translate(${dx * 1.3}px,${dy + 520}px) rotate(${R(600, 1000)}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: R(1600, 2600),
                easing: 'ease-out'
            }
        ).onfinish = () => c.remove();
    }
}


/* ============ KADO ============ */
const gift = $('#gift'),
      cam = $('#cam'),
      inside = $('#inside'),
      hint = $('#hint');

let ready = false,
    busy = false,
    built = false;

setTimeout(() => {
    ready = true;
    gift.classList.add('ready');
    hint.classList.add('on');
}, 5900);

gift.onclick = () => {
    if (!ready || busy) return;

    busy = true;
    hint.classList.remove('on');
    gift.classList.add('open');

    const r = gift.getBoundingClientRect();

    burst(r.left + r.width / 2, r.top, 70);

    setTimeout(() => {
        cam.style.transform = 'translate(-115px,-140px) scale(5.5)';
    }, 700);

    setTimeout(() => {
        if (!built) {
            build();
            built = true;
        }

        inside.classList.add('show');
    }, 2000);
};

$('#back').onclick = () => {
    inside.classList.remove('show');
    cam.style.transform = '';
    gift.classList.remove('open');

    setTimeout(() => {
        busy = false;
        hint.classList.add('on');
    }, 1800);
};


/* ============ ISI KADO ============ */
let zi = 1;

function build() {
    const all = [];
    const n = Math.max(CONFIG.foto.length, CONFIG.surat.length);

    for (let i = 0; i < n; i++) {
        if (CONFIG.foto[i]) {
            all.push({
                t: 'f',
                d: CONFIG.foto[i],
                i
            });
        }

        if (CONFIG.surat[i]) {
            all.push({
                t: 's',
                d: CONFIG.surat[i],
                i
            });
        }
    }

    const W = innerWidth,
          H = innerHeight,
          N = all.length,
          cols = Math.max(1, Math.round(Math.sqrt(N * W / (H * .85)))),
          rows = Math.ceil(N / cols),
          cw = W * .92 / cols,
          ch = H * .72 / rows,
          f = Math.max(.55, Math.min(1.25, Math.min(cw / 150, ch / 150)));

    all.forEach((o, k) => {
        const el = document.createElement('div'),
              w = (o.t === 'f' ? 118 : 150) * f,
              c = k % cols,
              r = Math.floor(k / cols);

        el.className = 'it ' + (o.t === 'f' ? 'ph' : 'lt');
        el.style.width = w + 'px';

        if (o.t === 'f') {
            el.innerHTML = `
                <img draggable="false" src="${o.d.src || ph(o.i)}">
                <span>${o.d.caption || ''}</span>
            `;
        } else {
            el.innerHTML = '<b>💌</b>';
        }

        el.style.left = Math.max(
            4,
            W * .04 + c * cw + cw / 2 - w / 2 + R(-10, 10)
        ) + 'px';

        el.style.top = (
            H * .2 + r * ch + ch / 2 - w * .6 + R(-8, 8)
        ) + 'px';

        el.style.setProperty('--r', R(-12, 12) + 'deg');
        el.style.setProperty('--d', k * .15 + 's');

        drag(el, () => o.t === 'f'
            ? photo(el, o.d, o.i)
            : letter(el, o.d)
        );

        $('#items').append(el);
    });
}


/* ============ DRAG ============ */
function drag(el, fn) {
    let sx, sy, ox, oy, mv;

    el.addEventListener('pointerdown', e => {
        el.setPointerCapture(e.pointerId);

        sx = e.clientX;
        sy = e.clientY;
        ox = el.offsetLeft;
        oy = el.offsetTop;
        mv = 0;

        el.classList.add('drag');
        el.style.zIndex = ++zi;
    });

    el.addEventListener('pointermove', e => {
        if (!el.hasPointerCapture(e.pointerId)) return;

        const dx = e.clientX - sx,
              dy = e.clientY - sy;

        if (Math.hypot(dx, dy) > 6) mv = 1;

        el.style.left = Math.min(
            innerWidth - 30,
            Math.max(30 - el.offsetWidth, ox + dx)
        ) + 'px';

        el.style.top = Math.min(
            innerHeight - 30,
            Math.max(0, oy + dy)
        ) + 'px';
    });

    el.addEventListener('pointerup', () => {
        el.classList.remove('drag');

        if (!mv) fn();
    });

    el.addEventListener('pointercancel', () => {
        el.classList.remove('drag');
    });
}


/* ============ VIEWER ============ */
const V = $('#viewer');

function openV() {
    V.innerHTML = '<button id="x" aria-label="Tutup">✕</button>';
    V.classList.add('on');

    $('#x').onclick = e => {
        e.stopPropagation();
        closeV();
    };
}

function closeV() {
    V.classList.remove('on');
    V.innerHTML = '';
}

V.onclick = e => {
    if (e.target === V) closeV();
};

addEventListener('keydown', e => {
    if (e.key === 'Escape') closeV();
});


/* ============ ANIMASI FLIP ============ */
function flip(el, from, ms = 750) {
    const a = from.getBoundingClientRect(),
          b = el.getBoundingClientRect(),
          dx = a.left + a.width / 2 - b.left - b.width / 2,
          dy = a.top + a.height / 2 - b.top - b.height / 2,
          s = a.width / b.width;

    el.animate(
        [
            {
                transform: `perspective(900px) translate(${dx}px,${dy}px) scale(${s}) rotateY(90deg)`
            },
            {
                transform: 'perspective(900px)'
            }
        ],
        {
            duration: ms,
            easing: 'cubic-bezier(.2,.9,.3,1.05)'
        }
    );
}


/* ============ FOTO ============ */
function photo(it, d, i) {
    openV();

    const el = document.createElement('div');

    el.className = 'big';

    el.innerHTML = `
        <img src="${d.src || ph(i)}">
        <p>${d.caption || ''}</p>
    `;

    V.append(el);
    flip(el, it);
}


/* ============ SURAT ============ */
function letter(it, d) {
    openV();

    const w = document.createElement('div');

    w.innerHTML = `
        <div class="env">
            <div class="bk"></div>
            <div class="pp">${d.judul}</div>
            <div class="pk"></div>
            <div class="fl"></div>
            <div class="sl">❤️</div>
            <div class="tap">Klik surat untuk membukanya ✉️</div>
        </div>
    `;

    const env = w.firstChild;

    V.append(env);
    flip(env, it);

    let st = 0;

    env.onclick = () => {
        if (st) return;

        st = 1;
        env.classList.add('open');
        env.querySelector('.tap').remove();

        setTimeout(() => {
            const pp = env.querySelector('.pp'),
                  sh = document.createElement('div');

            sh.className = 'sheet';

            sh.innerHTML = `
                <h2>${d.judul}</h2>
                <p>${d.isi}\n\n— ${CONFIG.dari}</p>
            `;

            V.append(sh);
            flip(sh, pp, 800);

            env.animate(
                [
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        transform: 'translateY(60px)'
                    }
                ],
                {
                    duration: 600,
                    fill: 'forwards'
                }
            );

            setTimeout(() => env.remove(), 600);

        }, 1150);
    };
}
