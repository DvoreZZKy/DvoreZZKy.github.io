const bg = document.getElementById("backGraund");

const snippeds = [
    'Console.WriteLine("Hello, World!");',
    "for (int i = 0; i < 10; i++)",
    "CREATE TABLE IF NOT EXISTS Contacts ();",
    'git commit -m "new features"',
    "dotnet build",
    "#include<iostream>",
    "using namespace std;",
    'if (isReady) { std::cout << "Готов к старту!" }',
    "var json = JsonSerialize();",
    'System.out.println("Hello, World!");',
    "while (true) { learn(); create(); }"
];

const colors = [
    "#7C3AED",
    "#A855F7",
    "#BF00FF"
]

function createLine() {
    const line = document.createElement("div");
    const text = snippeds[Math.floor(Math.random() * snippeds.length)];
    
    const duration = 2 + Math.random() * 4;
    const end = duration + 1.5;
    const chars = text.length;

    line.className = "code-line";
    line.textContent = text;

    line.style.left = `${Math.random() * 85}vw`;
    line.style.top = `${Math.random() * 95}vh`;
    line.style.color = colors[Math.floor(Math.random() * colors.length)];

    line.style.setProperty("--chars", chars);
    line.style.setProperty("--width", `${chars * 8}px`);
    line.style.setProperty("--duration", `${duration}s`);
    line.style.setProperty("--end", `${end}s`);
    line.style.setProperty(
        "--opacity",
        0.25 + Math.random() * 0.55
    );

    bg.appendChild(line);

    setTimeout(() => line.remove(), (end + 0.7) * 1000);
}

for (let i = 0; i < 30; i ++) {
    setTimeout(createLine, i * 180);
}

setInterval(createLine, 250);

const bgElement = document.getElementById("backGraund");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  targetX = -x * 100;
  targetY = -y * 100;
});

function animateBackground() {
  currentX += (targetX - currentX) * 0.2;
  currentY += (targetY - currentY) * 0.2;

  bgElement.style.setProperty("--move-x", `${currentX}px`);
  bgElement.style.setProperty("--move-y", `${currentY}px`);

  requestAnimationFrame(animateBackground);
}

animateBackground();