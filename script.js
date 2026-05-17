const THEMES = {
  space: {
    label:'🚀 Space', accent:'#7c6fff',
    cards:[
      {name:'rocket',    bg:'#0d1540', rim:'#7c6fff', draw:'rocket'},
      {name:'planet',    bg:'#150d40', rim:'#c084fc', draw:'planet'},
      {name:'astronaut', bg:'#0a2030', rim:'#60a5fa', draw:'astronaut'},
      {name:'alien',     bg:'#0f2010', rim:'#4ade80', draw:'alien'},
      {name:'comet',     bg:'#200a10', rim:'#f87171', draw:'comet'},
      {name:'nebula',    bg:'#1a0830', rim:'#e879f9', draw:'nebula'},
      {name:'moon',      bg:'#10182a', rim:'#93c5fd', draw:'moon'},
      {name:'satellite', bg:'#182010', rim:'#86efac', draw:'satellite'},
      {name:'blackhole', bg:'#080812', rim:'#818cf8', draw:'blackhole'},
    ]
  },
  ocean: {
    label:'🌊 Ocean', accent:'#22d3ee',
    cards:[
      {name:'jellyfish', bg:'#021a30', rim:'#67e8f9', draw:'jellyfish'},
      {name:'whale',     bg:'#031520', rim:'#38bdf8', draw:'whale'},
      {name:'turtle',    bg:'#042a1a', rim:'#34d399', draw:'turtle'},
      {name:'octopus',   bg:'#1a0530', rim:'#a78bfa', draw:'octopus'},
      {name:'fish',      bg:'#0a2540', rim:'#7dd3fc', draw:'fish'},
      {name:'crab',      bg:'#2d0a0a', rim:'#f87171', draw:'crab'},
      {name:'seahorse',  bg:'#150535', rim:'#c084fc', draw:'seahorse'},
      {name:'shark',     bg:'#0c1c2c', rim:'#94a3b8', draw:'shark'},
      {name:'coral',     bg:'#2a0d10', rim:'#fb7185', draw:'coral'},
    ]
  },
  forest: {
    label:'🌲 Forest', accent:'#4ade80',
    cards:[
      {name:'tree',      bg:'#0a1a08', rim:'#4ade80', draw:'tree'},
      {name:'mushroom',  bg:'#1a0808', rim:'#f87171', draw:'mushroom'},
      {name:'butterfly', bg:'#1a0520', rim:'#e879f9', draw:'butterfly'},
      {name:'owl',       bg:'#180e04', rim:'#fbbf24', draw:'owl'},
      {name:'deer',      bg:'#120a04', rim:'#fb923c', draw:'deer'},
      {name:'flower',    bg:'#180410', rim:'#f472b6', draw:'flower'},
      {name:'acorn',     bg:'#1a0c04', rim:'#d97706', draw:'acorn'},
      {name:'leaf',      bg:'#081408', rim:'#86efac', draw:'leaf'},
      {name:'fox',       bg:'#1a0a04', rim:'#f97316', draw:'fox'},
    ]
  },
  gems: {
    label:'💎 Gems', accent:'#fb923c',
    cards:[
      {name:'diamond',   bg:'#0a1020', rim:'#93c5fd', draw:'diamond'},
      {name:'ruby',      bg:'#1a0408', rim:'#f87171', draw:'ruby'},
      {name:'emerald',   bg:'#041a08', rim:'#4ade80', draw:'emerald'},
      {name:'amethyst',  bg:'#12041a', rim:'#c084fc', draw:'amethyst'},
      {name:'sapphire',  bg:'#04081a', rim:'#60a5fa', draw:'sapphire'},
      {name:'topaz',     bg:'#1a1004', rim:'#fbbf24', draw:'topaz'},
      {name:'opal',      bg:'#100a1a', rim:'#e879f9', draw:'opal'},
      {name:'garnet',    bg:'#1a0408', rim:'#fb7185', draw:'garnet'},
      {name:'crystal',   bg:'#0a1218', rim:'#67e8f9', draw:'crystal'},
    ]
  },
  books: {
    label:'📚 Library', accent:'#d97706',
    cards:[
      {name:'spell',     bg:'#1a0d04', rim:'#fbbf24', draw:'spellbook'},
      {name:'atlas',     bg:'#041020', rim:'#60a5fa', draw:'atlas'},
      {name:'scroll',    bg:'#1a1004', rim:'#d97706', draw:'scroll'},
      {name:'diary',     bg:'#1a0408', rim:'#f87171', draw:'diary'},
      {name:'codex',     bg:'#080a1a', rim:'#818cf8', draw:'codex'},
      {name:'novel',     bg:'#041a08', rim:'#4ade80', draw:'novel'},
      {name:'poetry',    bg:'#180410', rim:'#f472b6', draw:'poetry'},
      {name:'science',   bg:'#04141a', rim:'#22d3ee', draw:'sciencebook'},
      {name:'ancient',   bg:'#120c04', rim:'#a78bfa', draw:'ancientbook'},
    ]
  },
  weather: {
    label:'⛅ Weather', accent:'#38bdf8',
    cards:[
      {name:'storm',     bg:'#080c18', rim:'#818cf8', draw:'storm'},
      {name:'sun',       bg:'#1a1004', rim:'#fbbf24', draw:'sunglow'},
      {name:'snow',      bg:'#08101a', rim:'#bae6fd', draw:'snowflake'},
      {name:'rainbow',   bg:'#041020', rim:'#f0abfc', draw:'rainbow'},
      {name:'tornado',   bg:'#0c0c18', rim:'#94a3b8', draw:'tornado'},
      {name:'lightning', bg:'#0a0a14', rim:'#fde68a', draw:'lightning'},
      {name:'fog',       bg:'#101012', rim:'#cbd5e1', draw:'fog'},
      {name:'aurora',    bg:'#04100c', rim:'#6ee7b7', draw:'aurora'},
      {name:'hail',      bg:'#081018', rim:'#7dd3fc', draw:'hail'},
    ]
  },
  mythology: {
    label:'⚡ Myths', accent:'#f59e0b',
    cards:[
      {name:'dragon',    bg:'#1a0408', rim:'#f87171', draw:'dragon'},
      {name:'phoenix',   bg:'#1a0804', rim:'#fb923c', draw:'phoenix'},
      {name:'unicorn',   bg:'#180418', rim:'#e879f9', draw:'unicorn'},
      {name:'griffin',   bg:'#0c0c04', rim:'#fbbf24', draw:'griffin'},
      {name:'mermaid',   bg:'#021a20', rim:'#22d3ee', draw:'mermaid'},
      {name:'medusa',    bg:'#041408', rim:'#4ade80', draw:'medusa'},
      {name:'kraken',    bg:'#04041a', rim:'#818cf8', draw:'kraken'},
      {name:'pegasus',   bg:'#0c0c18', rim:'#c4b5fd', draw:'pegasus'},
      {name:'sphinx',    bg:'#180c04', rim:'#d97706', draw:'sphinx'},
    ]
  },
  food: {
    label:'🍕 Foodie', accent:'#f97316',
    cards:[
      {name:'pizza',     bg:'#1a0804', rim:'#fb923c', draw:'pizza'},
      {name:'sushi',     bg:'#041018', rim:'#38bdf8', draw:'sushi'},
      {name:'taco',      bg:'#1a1004', rim:'#fbbf24', draw:'taco'},
      {name:'ramen',     bg:'#1a0808', rim:'#f87171', draw:'ramen'},
      {name:'cake',      bg:'#1a0418', rim:'#f472b6', draw:'cake'},
      {name:'lemon',     bg:'#181404', rim:'#fde68a', draw:'lemon'},
      {name:'avocado',   bg:'#081408', rim:'#86efac', draw:'avocado'},
      {name:'burger',    bg:'#140804', rim:'#d97706', draw:'burger'},
      {name:'icecream',  bg:'#100418', rim:'#c084fc', draw:'icecream'},
    ]
  },
};
 
function drawCard(canvas, card, size) {
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.height = size;
 
  ctx.fillStyle = card.bg;
  roundRect(ctx, 0, 0, size, size, size*0.1);
  ctx.fill();
 
  ctx.save();
  ctx.strokeStyle = card.rim;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.5;
  roundRect(ctx, 2, 2, size-4, size-4, size*0.09);
  ctx.stroke();
  ctx.restore();
 
  const gl = ctx.createRadialGradient(size*0.5, size*0.4, 0, size*0.5, size*0.4, size*0.6);
  gl.addColorStop(0, card.rim+'22');
  gl.addColorStop(1, 'transparent');
  ctx.fillStyle = gl;
  ctx.fillRect(0,0,size,size);
 
  ctx.save();
  ctx.translate(size/2, size/2);
  const s = size * 0.34;
  drawShape(ctx, card.draw, s, card.rim, card.bg);
  ctx.restore();
}
 
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x+r, y);
  ctx.lineTo(x+w-r, y);
  ctx.quadraticCurveTo(x+w, y, x+w, y+r);
  ctx.lineTo(x+w, y+h-r);
  ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  ctx.lineTo(x+r, y+h);
  ctx.quadraticCurveTo(x, y+h, x, y+h-r);
  ctx.lineTo(x, y+r);
  ctx.quadraticCurveTo(x, y, x+r, y);
  ctx.closePath();
}
 
function star(ctx, n, r1, r2, cx=0, cy=0) {
  ctx.beginPath();
  for(let i=0;i<n*2;i++){
    const a = (i*Math.PI/n) - Math.PI/2;
    const r = i%2===0 ? r1 : r2;
    i===0 ? ctx.moveTo(Math.cos(a)*r+cx, Math.sin(a)*r+cy) : ctx.lineTo(Math.cos(a)*r+cx, Math.sin(a)*r+cy);
  }
  ctx.closePath();
}
 
function drawShape(ctx, type, s, color, bg) {
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  const lw = s*0.1;

  switch(type) { 
    case 'rocket':
      ctx.beginPath();
      ctx.moveTo(0,-s*1.1);ctx.bezierCurveTo(s*0.5,-s*0.5,s*0.5,s*0.2,s*0.4,s*0.7);
      ctx.lineTo(-s*0.4,s*0.7);ctx.bezierCurveTo(-s*0.5,s*0.2,-s*0.5,-s*0.5,0,-s*1.1);
      ctx.fill();
      ctx.beginPath();ctx.moveTo(-s*0.4,s*0.4);ctx.lineTo(-s*0.85,s*0.9);ctx.lineTo(-s*0.4,s*0.85);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.4,s*0.4);ctx.lineTo(s*0.85,s*0.9);ctx.lineTo(s*0.4,s*0.85);ctx.closePath();ctx.fill();
      ctx.fillStyle=bg; ctx.globalAlpha=0.6;
      ctx.beginPath();ctx.arc(0,-s*0.3,s*0.25,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1; ctx.fillStyle='rgba(255,255,255,0.4)';
      ctx.beginPath();ctx.arc(-s*0.06,-s*0.36,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#f97316'; ctx.globalAlpha=0.9;
      ctx.beginPath();ctx.ellipse(0,s*0.9,s*0.18,s*0.35,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fbbf24'; ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.ellipse(0,s*0.88,s*0.09,s*0.2,0,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'planet':
      ctx.beginPath();ctx.arc(0,0,s*0.75,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.25)';
      ctx.beginPath();ctx.ellipse(-s*0.15,-s*0.2,s*0.28,s*0.18,-.5,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.2,s*0.2,s*0.2,s*0.13,.3,0,Math.PI*2);ctx.fill();
      
      ctx.save();ctx.rotate(-0.4);
      ctx.strokeStyle=color; ctx.lineWidth=s*0.14; ctx.globalAlpha=0.5;
      ctx.beginPath();ctx.ellipse(0,0,s*1.15,s*0.28,0,0,Math.PI*2);ctx.stroke();
      ctx.lineWidth=s*0.06; ctx.globalAlpha=0.9;
      ctx.beginPath();ctx.ellipse(0,0,s*1.15,s*0.28,0,0,Math.PI*2);ctx.stroke();
      ctx.restore(); ctx.globalAlpha=1;
      // shine
      ctx.fillStyle='rgba(255,255,255,0.2)';
      ctx.beginPath();ctx.ellipse(-s*0.28,-s*0.3,s*0.22,s*0.16,-.5,0,Math.PI*2);ctx.fill();
      break;
 
    case 'astronaut':
      // suit body
      ctx.beginPath();ctx.ellipse(0,s*0.3,s*0.5,s*0.6,0,0,Math.PI*2);ctx.fill();
      // helmet
      ctx.beginPath();ctx.arc(0,-s*0.3,s*0.52,0,Math.PI*2);ctx.fill();
      // visor
      ctx.fillStyle=bg; ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.ellipse(0,-s*0.3,s*0.38,s*0.35,0,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1; ctx.fillStyle='rgba(100,200,255,0.3)';
      ctx.beginPath();ctx.ellipse(-s*0.12,-s*0.4,s*0.16,s*0.2,-0.3,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // arms
      ctx.beginPath();ctx.ellipse(-s*0.7,s*0.25,s*0.2,s*0.45,-.3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.7,s*0.25,s*0.2,s*0.45,.3,0,Math.PI*2);ctx.fill();
      // legs
      ctx.beginPath();ctx.ellipse(-s*0.22,s*1,s*0.22,s*0.35,-.1,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.22,s*1,s*0.22,s*0.35,.1,0,Math.PI*2);ctx.fill();
      break;
 
    case 'alien':
      // head
      ctx.beginPath();ctx.ellipse(0,-s*0.1,s*0.55,s*0.7,0,0,Math.PI*2);ctx.fill();
      // eyes
      ctx.fillStyle=bg; ctx.globalAlpha=0.8;
      ctx.beginPath();ctx.ellipse(-s*0.22,-s*0.15,s*0.18,s*0.22,-.3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.22,-s*0.15,s*0.18,s*0.22,.3,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1; ctx.fillStyle='rgba(0,255,100,0.8)';
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.15,s*0.09,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.15,s*0.09,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.8)';
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.17,s*0.04,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.17,s*0.04,0,Math.PI*2);ctx.fill();
      // antennae
      ctx.fillStyle=color; ctx.lineWidth=lw*0.8; ctx.strokeStyle=color;
      ctx.beginPath();ctx.moveTo(-s*0.2,-s*0.75);ctx.lineTo(-s*0.4,-s*1.15);ctx.stroke();
      ctx.beginPath();ctx.moveTo(s*0.2,-s*0.75);ctx.lineTo(s*0.4,-s*1.15);ctx.stroke();
      ctx.beginPath();ctx.arc(-s*0.4,-s*1.2,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.4,-s*1.2,s*0.1,0,Math.PI*2);ctx.fill();
      // smile
      ctx.lineWidth=lw*0.7; ctx.strokeStyle=color; ctx.fillStyle='none';
      ctx.beginPath();ctx.arc(0,s*0.2,s*0.22,0.1,Math.PI-0.1);ctx.stroke();
      break;
 
    case 'comet':
      // tail
      for(let i=0;i<5;i++){
        ctx.globalAlpha=0.15+i*0.08;
        ctx.fillStyle=color;
        ctx.beginPath();ctx.ellipse(-s*0.15+i*s*0.08,s*0.05+i*s*0.1,s*(0.5-i*0.08),s*(0.12-i*0.015),0.4,0,Math.PI*2);
        ctx.fill();
      }
      ctx.globalAlpha=1;
      // core
      ctx.beginPath();ctx.arc(s*0.4,-s*0.45,s*0.38,0,Math.PI*2);ctx.fill();
      // shine
      ctx.fillStyle='rgba(255,255,255,0.35)';
      ctx.beginPath();ctx.arc(s*0.28,-s*0.58,s*0.16,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.6)';
      ctx.beginPath();ctx.arc(s*0.22,-s*0.62,s*0.07,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'nebula':
      for(let i=0;i<8;i++){
        const a=i*Math.PI/4;
        ctx.globalAlpha=0.15+Math.random()*0.25;
        ctx.fillStyle=[color,'#f0abfc','#818cf8'][i%3];
        ctx.beginPath();ctx.arc(Math.cos(a)*s*0.55,Math.sin(a)*s*0.55,s*(0.3+Math.sin(i)*0.15),0,Math.PI*2);ctx.fill();
      }
      ctx.globalAlpha=1; ctx.fillStyle='rgba(255,255,255,0.8)';
      // stars
      for(let i=0;i<6;i++){
        const x=(-0.5+Math.sin(i*137)*0.8)*s;
        const y=(-0.5+Math.cos(i*137)*0.8)*s;
        ctx.beginPath();ctx.arc(x,y,s*0.04,0,Math.PI*2);ctx.fill();
      }
      ctx.fillStyle=color;
      break;
 
    case 'moon':
      // full circle
      ctx.beginPath();ctx.arc(0,0,s*0.78,0,Math.PI*2);ctx.fill();
      // shadow
      ctx.fillStyle=bg;
      ctx.beginPath();ctx.arc(s*0.25,-s*0.1,s*0.72,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // craters
      ctx.globalAlpha=0.3;
      ctx.beginPath();ctx.arc(-s*0.25,s*0.1,s*0.18,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(-s*0.05,-s*0.38,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1;
      break;
 
    case 'satellite':
      // body
      ctx.beginPath();ctx.roundRect(-s*0.28,-s*0.18,s*0.56,s*0.36,s*0.06);ctx.fill();
      // solar panels
      ctx.beginPath();ctx.roundRect(-s*0.95,-s*0.15,s*0.58,s*0.3,s*0.03);ctx.fill();
      ctx.beginPath();ctx.roundRect(s*0.37,-s*0.15,s*0.58,s*0.3,s*0.03);ctx.fill();
      // panel lines
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.4; ctx.globalAlpha=0.5;
      for(let i=1;i<5;i++){ctx.beginPath();ctx.moveTo(-s*0.95+i*s*0.116,-s*0.15);ctx.lineTo(-s*0.95+i*s*0.116,s*0.15);ctx.stroke();}
      for(let i=1;i<5;i++){ctx.beginPath();ctx.moveTo(s*0.37+i*s*0.116,-s*0.15);ctx.lineTo(s*0.37+i*s*0.116,s*0.15);ctx.stroke();}
      ctx.globalAlpha=1;
      // dish
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.6; ctx.fillStyle='none';
      ctx.beginPath();ctx.arc(0,0,s*0.32,-Math.PI,-0.05);ctx.stroke();
      ctx.fillStyle=color;
      ctx.beginPath();ctx.arc(0,-s*0.32,s*0.07,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.4;
      ctx.beginPath();ctx.moveTo(0,-s*0.32);ctx.lineTo(0,0);ctx.stroke();
      // window
      ctx.fillStyle='rgba(100,200,255,0.5)';
      ctx.beginPath();ctx.arc(s*0.08,0,s*0.12,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'blackhole':
      // accretion disk
      for(let i=5;i>0;i--){
        ctx.strokeStyle=i%2===0?color:'#f97316';
        ctx.lineWidth=s*0.1*i/5;
        ctx.globalAlpha=0.12+i*0.06;
        ctx.beginPath();ctx.ellipse(0,0,s*(0.6+i*0.1),s*(0.15+i*0.03),0,0,Math.PI*2);ctx.stroke();
      }
      ctx.globalAlpha=1;
      // event horizon
      ctx.fillStyle='#000';
      ctx.beginPath();ctx.arc(0,0,s*0.45,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=color; ctx.lineWidth=s*0.12; ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.ellipse(0,0,s*0.65,s*0.18,0,0,Math.PI*2);ctx.stroke();
      ctx.globalAlpha=1;
      // ring shine
      ctx.fillStyle='rgba(255,255,255,0.15)';
      ctx.beginPath();ctx.ellipse(-s*0.4,-s*0.05,s*0.18,s*0.06,-.4,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    // ── OCEAN ──
    case 'jellyfish':
      // bell
      ctx.beginPath();ctx.ellipse(0,-s*0.1,s*0.68,s*0.55,0,Math.PI,Math.PI*2);ctx.fill();
      // underbelly
      ctx.fillStyle='rgba(255,255,255,0.12)';
      ctx.beginPath();ctx.ellipse(0,-s*0.1,s*0.55,s*0.42,0,Math.PI,Math.PI*2);ctx.fill();
      // shine
      ctx.fillStyle='rgba(255,255,255,0.25)';
      ctx.beginPath();ctx.ellipse(-s*0.22,-s*0.4,s*0.18,s*0.08,-.3,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // tentacles
      for(let i=0;i<8;i++){
        const tx = (-0.7+i*0.2)*s;
        ctx.strokeStyle=color; ctx.lineWidth=lw*0.55; ctx.globalAlpha=0.7;
        ctx.beginPath();ctx.moveTo(tx,s*0.3);
        const cx1=tx+Math.sin(i*0.7)*s*0.3, cy1=s*0.7;
        const cx2=tx-Math.sin(i*0.7)*s*0.3, cy2=s*1.05;
        ctx.bezierCurveTo(cx1,cy1,cx2,cy2,tx+Math.sin(i)*s*0.15,s*1.2);
        ctx.stroke();
      }
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'whale':
      // body
      ctx.beginPath();ctx.ellipse(0,0,s*0.95,s*0.52,0,0,Math.PI*2);ctx.fill();
      // belly
      ctx.fillStyle='rgba(255,255,255,0.18)';
      ctx.beginPath();ctx.ellipse(s*0.1,s*0.15,s*0.6,s*0.28,0.15,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // tail
      ctx.beginPath();ctx.moveTo(s*0.88,s*0.05);ctx.bezierCurveTo(s*1.1,-s*0.1,s*1.2,-s*0.35,s*1.1,-s*0.38);
      ctx.bezierCurveTo(s*1.0,-s*0.25,s*0.98,-s*0.08,s*0.88,s*0.05);ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.88,s*0.05);ctx.bezierCurveTo(s*1.1,s*0.2,s*1.2,s*0.45,s*1.1,s*0.48);
      ctx.bezierCurveTo(s*1.0,s*0.35,s*0.98,s*0.18,s*0.88,s*0.05);ctx.fill();
      // eye
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(-s*0.52,-s*0.12,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.6)';ctx.beginPath();ctx.arc(-s*0.56,-s*0.16,s*0.04,0,Math.PI*2);ctx.fill();
      // spout
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.6; ctx.globalAlpha=0.5;
      for(let i=-1;i<=1;i++){ctx.beginPath();ctx.moveTo(-s*0.35,-s*0.5);ctx.quadraticCurveTo(-s*0.35+i*s*0.3,-s*0.9,-s*0.35+i*s*0.2,-s*1.1);ctx.stroke();}
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'turtle':
      // shell
      ctx.beginPath();ctx.ellipse(0,-s*0.08,s*0.65,s*0.55,0,0,Math.PI*2);ctx.fill();
      // shell pattern
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.5; ctx.globalAlpha=0.4;
      ctx.beginPath();ctx.arc(0,-s*0.08,s*0.32,0,Math.PI*2);ctx.stroke();
      for(let i=0;i<6;i++){const a=i*Math.PI/3;ctx.beginPath();ctx.moveTo(Math.cos(a)*s*0.32,Math.sin(a)*s*0.32-s*0.08);ctx.lineTo(Math.cos(a)*s*0.65,Math.sin(a)*s*0.55-s*0.08);ctx.stroke();}
      ctx.globalAlpha=1; ctx.fillStyle=color;
      // head
      ctx.beginPath();ctx.ellipse(0,-s*0.72,s*0.22,s*0.28,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(-s*0.08,-s*0.8,s*0.06,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.08,-s*0.8,s*0.06,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // legs
      for(let [lx,ly,ra] of [[-s*0.6,s*0.1,-0.4],[s*0.6,s*0.1,0.4],[-s*0.45,s*0.45,-0.2],[s*0.45,s*0.45,0.2]]){
        ctx.beginPath();ctx.ellipse(lx,ly,s*0.2,s*0.12,ra,0,Math.PI*2);ctx.fill();
      }
      break;
 
    case 'octopus':
      // head
      ctx.beginPath();ctx.ellipse(0,-s*0.2,s*0.55,s*0.65,0,0,Math.PI*2);ctx.fill();
      // eyes
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.ellipse(-s*0.2,-s*0.3,s*0.12,s*0.14,-.2,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.ellipse(s*0.2,-s*0.3,s*0.12,s*0.14,.2,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.4)';ctx.beginPath();ctx.arc(-s*0.22,-s*0.34,s*0.05,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.18,-s*0.34,s*0.05,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // tentacles
      const tStart=[[-s*0.5,s*0.35],[-s*0.32,s*0.42],[-s*0.12,s*0.45],[s*0.12,s*0.45],[s*0.32,s*0.42],[s*0.5,s*0.35],[s*0.62,s*0.2],[-s*0.62,s*0.2]];
      tStart.forEach(([tx,ty],i)=>{
        ctx.strokeStyle=color; ctx.lineWidth=lw*0.7; ctx.globalAlpha=0.85;
        ctx.beginPath(); ctx.moveTo(tx,ty);
        const wave=i%2===0?1:-1;
        ctx.bezierCurveTo(tx+wave*s*0.4,ty+s*0.4,tx-wave*s*0.25,ty+s*0.75,tx+wave*s*0.15,ty+s*0.95);
        ctx.stroke();
      });
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'fish':
      // body
      ctx.beginPath();ctx.ellipse(-s*0.1,0,s*0.65,s*0.4,0,0,Math.PI*2);ctx.fill();
      // tail
      ctx.beginPath();ctx.moveTo(s*0.55,0);ctx.bezierCurveTo(s*0.85,-s*0.45,s*1.05,-s*0.5,s*1.0,-s*0.48);ctx.bezierCurveTo(s*0.92,-s*0.2,s*0.8,0,s*0.55,0);ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.55,0);ctx.bezierCurveTo(s*0.85,s*0.45,s*1.05,s*0.5,s*1.0,s*0.48);ctx.bezierCurveTo(s*0.92,s*0.2,s*0.8,0,s*0.55,0);ctx.fill();
      // fin
      ctx.beginPath();ctx.moveTo(-s*0.1,-s*0.4);ctx.bezierCurveTo(s*0.15,-s*0.75,s*0.35,-s*0.7,s*0.3,-s*0.4);ctx.closePath();ctx.fill();
      // scales
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.35; ctx.globalAlpha=0.25;
      for(let i=0;i<4;i++)for(let j=0;j<3;j++){ctx.beginPath();ctx.arc(-s*0.4+i*s*0.26,-s*0.1+j*s*0.18,s*0.13,Math.PI,Math.PI*2);ctx.stroke();}
      ctx.globalAlpha=1;
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(-s*0.52,-s*0.1,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.5)';ctx.beginPath();ctx.arc(-s*0.56,-s*0.14,s*0.04,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'crab':
      // body
      ctx.beginPath();ctx.ellipse(0,0,s*0.6,s*0.45,0,0,Math.PI*2);ctx.fill();
      // shell detail
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.4; ctx.globalAlpha=0.3;
      for(let i=1;i<4;i++){ctx.beginPath();ctx.arc(0,0,s*0.15*i,0,Math.PI*2);ctx.stroke();}
      ctx.globalAlpha=1;
      // claws
      ctx.fillStyle=color;
      ctx.beginPath();ctx.ellipse(-s*0.95,-s*0.28,s*0.3,s*0.18,-.5,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*1.1,-s*0.1,s*0.22,s*0.15,-.3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.95,-s*0.28,s*0.3,s*0.18,.5,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*1.1,-s*0.1,s*0.22,s*0.15,.3,0,Math.PI*2);ctx.fill();
      // legs
      for(let i=0;i<3;i++){
        const x=-s*0.38+i*s*0.22;
        ctx.strokeStyle=color; ctx.lineWidth=lw*0.7;
        ctx.beginPath();ctx.moveTo(x,s*0.42);ctx.lineTo(x-s*0.15,s*0.85);ctx.lineTo(x-s*0.08,s*1.05);ctx.stroke();
        ctx.beginPath();ctx.moveTo(-x,s*0.42);ctx.lineTo(-x+s*0.15,s*0.85);ctx.lineTo(-x+s*0.08,s*1.05);ctx.stroke();
      }
      // eyes
      ctx.fillStyle='rgba(0,0,0,0.9)';
      ctx.beginPath();ctx.arc(-s*0.25,-s*0.42,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.25,-s*0.42,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.5)';
      ctx.beginPath();ctx.arc(-s*0.28,-s*0.46,s*0.04,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.46,s*0.04,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'seahorse':
      // body curve
      ctx.lineWidth=s*0.38; ctx.strokeStyle=color; ctx.fillStyle='none';
      ctx.beginPath();ctx.moveTo(0,-s*0.9);
      ctx.bezierCurveTo(s*0.5,-s*0.6,s*0.5,0,0,s*0.2);
      ctx.bezierCurveTo(-s*0.5,s*0.45,-s*0.4,s*0.8,0,s*1.0);
      ctx.stroke();
      // head
      ctx.fillStyle=color;
      ctx.beginPath();ctx.ellipse(-s*0.15,-s*0.88,s*0.3,s*0.25,.5,0,Math.PI*2);ctx.fill();
      // snout
      ctx.beginPath();ctx.moveTo(-s*0.35,-s*1.02);ctx.lineTo(-s*0.75,-s*1.18);ctx.lineWidth=lw*0.8;ctx.strokeStyle=color;ctx.stroke();
      ctx.fillStyle=color;
      // eye
      ctx.fillStyle='rgba(0,0,0,0.9)';ctx.beginPath();ctx.arc(-s*0.08,-s*0.98,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.5)';ctx.beginPath();ctx.arc(-s*0.1,-s*1.01,s*0.03,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // fin
      ctx.fillStyle='rgba(255,255,255,0.3)';ctx.beginPath();ctx.ellipse(s*0.45,-s*0.35,s*0.3,s*0.18,-0.5,0,Math.PI*2);ctx.fill();
      break;
 
    case 'shark':
      ctx.beginPath();ctx.ellipse(0,0,s*0.9,s*0.38,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.15)';
      ctx.beginPath();ctx.ellipse(s*0.1,s*0.12,s*0.6,s*0.2,0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // dorsal fin
      ctx.beginPath();ctx.moveTo(-s*0.1,-s*0.38);ctx.lineTo(s*0.15,-s*0.95);ctx.lineTo(s*0.4,-s*0.38);ctx.closePath();ctx.fill();
      // tail
      ctx.beginPath();ctx.moveTo(s*0.88,s*0.05);ctx.lineTo(s*1.2,-s*0.38);ctx.lineTo(s*1.08,0);ctx.lineTo(s*1.2,s*0.38);ctx.lineTo(s*0.88,-s*0.05);ctx.closePath();ctx.fill();
      // pec fin
      ctx.beginPath();ctx.moveTo(-s*0.05,s*0.38);ctx.lineTo(-s*0.28,s*0.75);ctx.lineTo(s*0.28,s*0.38);ctx.closePath();ctx.fill();
      // eye
      ctx.fillStyle='rgba(0,0,0,0.9)';ctx.beginPath();ctx.arc(-s*0.52,-s*0.08,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.4)';ctx.beginPath();ctx.arc(-s*0.55,-s*0.11,s*0.04,0,Math.PI*2);ctx.fill();
      // gills
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.4; ctx.globalAlpha=0.3;
      for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-s*0.15+i*s*0.1,-s*0.25);ctx.lineTo(-s*0.22+i*s*0.1,s*0.1);ctx.stroke();}
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'coral':
      // branches
      function branch(x,y,dx,dy,depth,lw2){
        if(depth<0) return;
        ctx.strokeStyle=color; ctx.lineWidth=lw2; ctx.globalAlpha=0.7+depth*0.1;
        ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+dx,y+dy);ctx.stroke();
        if(depth>0){branch(x+dx,y+dy,dx*0.6-dy*0.3,dy*0.6+dx*0.3,depth-1,lw2*0.7);branch(x+dx,y+dy,dx*0.6+dy*0.3,dy*0.6-dx*0.3,depth-1,lw2*0.7);}
      }
      branch(0,s*0.7,0,-s*0.65,3,lw*1.2);
      branch(-s*0.4,s*0.7,s*0.1,-s*0.6,2,lw*0.9);
      branch(s*0.4,s*0.7,-s*0.1,-s*0.6,2,lw*0.9);
      ctx.globalAlpha=1;
      // polyps
      ctx.fillStyle=color;
      for(let i=0;i<8;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.arc(Math.cos(a)*s*0.2,Math.sin(a)*s*0.2-s*0.1,s*0.1,0,Math.PI*2);ctx.fill();}
      break;
 
    // ── FOREST ──
    case 'tree':
      ctx.beginPath();ctx.moveTo(0,-s*1.08);ctx.lineTo(s*0.65,s*0.1);ctx.lineTo(-s*0.65,s*0.1);ctx.closePath();ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.12)';
      ctx.beginPath();ctx.moveTo(0,-s*0.78);ctx.lineTo(s*0.5,s*0.1);ctx.lineTo(-s*0.5,s*0.1);ctx.closePath();ctx.fill();
      ctx.fillStyle=color;
      ctx.beginPath();ctx.moveTo(0,-s*0.72);ctx.lineTo(s*0.78,s*0.45);ctx.lineTo(-s*0.78,s*0.45);ctx.closePath();ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.1)';
      ctx.beginPath();ctx.moveTo(0,-s*0.45);ctx.lineTo(s*0.62,s*0.45);ctx.lineTo(-s*0.62,s*0.45);ctx.closePath();ctx.fill();
      ctx.fillStyle=bg;
      ctx.beginPath();ctx.roundRect(-s*0.18,s*0.45,s*0.36,s*0.55,s*0.05);ctx.fill();
      break;
 
    case 'mushroom':
      // cap
      ctx.beginPath();ctx.moveTo(-s*0.8,s*0.15);ctx.bezierCurveTo(-s*0.8,-s*0.5,s*0.8,-s*0.5,s*0.8,s*0.15);ctx.closePath();ctx.fill();
      // spots
      ctx.fillStyle='rgba(255,255,255,0.55)';
      ctx.beginPath();ctx.arc(0,-s*0.35,s*0.18,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(-s*0.42,-s*0.12,s*0.12,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.42,-s*0.12,s*0.12,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.2,-s*0.5,s*0.09,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // stem
      ctx.beginPath();ctx.roundRect(-s*0.25,s*0.15,s*0.5,s*0.75,s*0.08);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.15)';
      ctx.beginPath();ctx.roundRect(-s*0.12,s*0.2,s*0.1,s*0.65,s*0.05);ctx.fill();
      // gills
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.3; ctx.globalAlpha=0.25;
      for(let i=0;i<9;i++){ctx.beginPath();ctx.moveTo(-s*0.8+i*s*0.2,s*0.15);ctx.lineTo(-s*0.52+i*s*0.13,s*0.3);ctx.stroke();}
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'butterfly':
      // upper wings
      ctx.beginPath();ctx.bezierCurveTo(-s*0.1,-s*0.5,-s*1.0,-s*0.8,-s*1.05,-s*0.1);ctx.bezierCurveTo(-s*1.0,s*0.3,-s*0.3,s*0.25,-s*0.05,s*0.08);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.bezierCurveTo(s*0.1,-s*0.5,s*1.0,-s*0.8,s*1.05,-s*0.1);ctx.bezierCurveTo(s*1.0,s*0.3,s*0.3,s*0.25,s*0.05,s*0.08);ctx.closePath();ctx.fill();
      // lower wings
      ctx.fillStyle=color+'cc';
      ctx.beginPath();ctx.bezierCurveTo(-s*0.05,s*0.1,-s*0.85,s*0.05,-s*0.85,s*0.6);ctx.bezierCurveTo(-s*0.85,s*1.0,-s*0.2,s*1.0,-s*0.05,s*0.6);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.bezierCurveTo(s*0.05,s*0.1,s*0.85,s*0.05,s*0.85,s*0.6);ctx.bezierCurveTo(s*0.85,s*1.0,s*0.2,s*1.0,s*0.05,s*0.6);ctx.closePath();ctx.fill();
      // wing patterns
      ctx.fillStyle='rgba(0,0,0,0.2)';
      ctx.beginPath();ctx.arc(-s*0.42,-s*0.1,s*0.2,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.42,-s*0.1,s*0.2,0,Math.PI*2);ctx.fill();
      // body
      ctx.fillStyle=bg; ctx.globalAlpha=0.8;
      ctx.beginPath();ctx.ellipse(0,s*0.18,s*0.08,s*0.62,0,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1;
      // antennae
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.45;
      ctx.beginPath();ctx.moveTo(-s*0.04,-s*0.4);ctx.quadraticCurveTo(-s*0.35,-s*0.95,-s*0.25,-s*1.1);ctx.stroke();
      ctx.beginPath();ctx.moveTo(s*0.04,-s*0.4);ctx.quadraticCurveTo(s*0.35,-s*0.95,s*0.25,-s*1.1);ctx.stroke();
      ctx.fillStyle=color;
      ctx.beginPath();ctx.arc(-s*0.25,-s*1.12,s*0.07,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.25,-s*1.12,s*0.07,0,Math.PI*2);ctx.fill();
      break;
 
    case 'owl':
      // body
      ctx.beginPath();ctx.ellipse(0,s*0.2,s*0.6,s*0.78,0,0,Math.PI*2);ctx.fill();
      // wing pattern
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.3; ctx.globalAlpha=0.2;
      for(let i=0;i<6;i++){ctx.beginPath();ctx.arc(0,s*0.25,s*0.15+i*s*0.07,0,Math.PI*2);ctx.stroke();}
      ctx.globalAlpha=1;
      // face disc
      ctx.fillStyle='rgba(255,255,255,0.15)';
      ctx.beginPath();ctx.ellipse(0,-s*0.28,s*0.48,s*0.42,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // ears
      ctx.beginPath();ctx.moveTo(-s*0.35,-s*0.72);ctx.lineTo(-s*0.55,-s*1.08);ctx.lineTo(-s*0.15,-s*0.78);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.35,-s*0.72);ctx.lineTo(s*0.55,-s*1.08);ctx.lineTo(s*0.15,-s*0.78);ctx.closePath();ctx.fill();
      // eyes
      ctx.fillStyle='rgba(0,0,0,0.85)';
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.3,s*0.2,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.3,s*0.2,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,220,50,0.9)';
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.3,s*0.14,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.3,s*0.14,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.9)';
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.3,s*0.07,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.3,s*0.07,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.6)';
      ctx.beginPath();ctx.arc(-s*0.26,-s*0.34,s*0.04,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.18,-s*0.34,s*0.04,0,Math.PI*2);ctx.fill();
      // beak
      ctx.fillStyle='#fbbf24';
      ctx.beginPath();ctx.moveTo(0,-s*0.14);ctx.lineTo(-s*0.1,-s*0.02);ctx.lineTo(s*0.1,-s*0.02);ctx.closePath();ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'deer':
      // body
      ctx.beginPath();ctx.ellipse(0,s*0.38,s*0.5,s*0.55,0,0,Math.PI*2);ctx.fill();
      // neck + head
      ctx.beginPath();ctx.ellipse(-s*0.12,-s*0.1,s*0.22,s*0.38,-.2,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*0.22,-s*0.55,s*0.28,s*0.32,-.1,0,Math.PI*2);ctx.fill();
      // ears
      ctx.beginPath();ctx.ellipse(-s*0.42,-s*0.75,s*0.12,s*0.22,-.5,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*0.05,-s*0.78,s*0.1,s*0.18,.3,0,Math.PI*2);ctx.fill();
      // antlers
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.7;
      ctx.beginPath();ctx.moveTo(-s*0.05,-s*0.85);ctx.lineTo(s*0.15,-s*1.2);ctx.lineTo(s*0.35,-s*1.08);ctx.moveTo(s*0.15,-s*1.2);ctx.lineTo(s*0.05,-s*1.38);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.28,-s*0.82);ctx.lineTo(-s*0.48,-s*1.12);ctx.lineTo(-s*0.65,-s*0.98);ctx.moveTo(-s*0.48,-s*1.12);ctx.lineTo(-s*0.38,-s*1.3);ctx.stroke();
      // legs
      ctx.fillStyle=color;
      for(let [lx,ly] of [[-s*0.28,s*0.92],[s*0.05,s*0.92],[-s*0.12,s*0.88],[s*0.2,s*0.88]]){
        ctx.beginPath();ctx.roundRect(lx-s*0.08,ly,s*0.13,s*0.4,s*0.04);ctx.fill();
      }
      // eye
      ctx.fillStyle='rgba(0,0,0,0.85)';ctx.beginPath();ctx.arc(-s*0.32,-s*0.6,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.5)';ctx.beginPath();ctx.arc(-s*0.35,-s*0.63,s*0.03,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'flower':
      // petals
      for(let i=0;i<8;i++){
        const a=i*Math.PI/4; ctx.globalAlpha=0.8+0.2*(i%2);
        ctx.beginPath();ctx.ellipse(Math.cos(a)*s*0.45,Math.sin(a)*s*0.45,s*0.28,s*0.2,a,0,Math.PI*2);ctx.fill();
      }
      ctx.globalAlpha=1;
      // center
      ctx.fillStyle='#fbbf24';
      ctx.beginPath();ctx.arc(0,0,s*0.3,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#f59e0b';
      for(let i=0;i<12;i++){const a=i*Math.PI/6;ctx.beginPath();ctx.arc(Math.cos(a)*s*0.18,Math.sin(a)*s*0.18,s*0.05,0,Math.PI*2);ctx.fill();}
      ctx.fillStyle=color;
      break;
 
    case 'acorn':
      // cap
      ctx.fillStyle=bg; ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.ellipse(0,-s*0.25,s*0.5,s*0.35,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color; ctx.globalAlpha=1;
      // cap texture
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.3; ctx.globalAlpha=0.3;
      for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(-s*0.45,-s*0.22+i*s*0.05);ctx.lineTo(s*0.45,-s*0.22+i*s*0.05);ctx.stroke();}
      ctx.globalAlpha=1; ctx.fillStyle=color;
      // body
      ctx.beginPath();ctx.ellipse(0,s*0.25,s*0.42,s*0.52,0,0,Math.PI*2);ctx.fill();
      // shine
      ctx.fillStyle='rgba(255,255,255,0.2)';
      ctx.beginPath();ctx.ellipse(-s*0.15,s*0.08,s*0.15,s*0.22,-.3,0,Math.PI*2);ctx.fill();
      // stem
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.8; ctx.globalAlpha=0.6;
      ctx.beginPath();ctx.moveTo(0,-s*0.58);ctx.quadraticCurveTo(s*0.18,-s*0.88,s*0.08,-s*1.05);ctx.stroke();
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'leaf':
      ctx.beginPath();ctx.moveTo(0,-s*0.95);
      ctx.bezierCurveTo(s*0.65,-s*0.6,s*0.75,s*0.1,s*0.2,s*0.55);
      ctx.bezierCurveTo(s*0.0,s*0.75,-s*0.1,s*0.75,-s*0.2,s*0.55);
      ctx.bezierCurveTo(-s*0.75,s*0.1,-s*0.65,-s*0.6,0,-s*0.95);
      ctx.fill();
      // veins
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.45; ctx.globalAlpha=0.3;
      ctx.beginPath();ctx.moveTo(0,-s*0.95);ctx.lineTo(0,s*0.6);ctx.stroke();
      for(let i=-3;i<=3;i++){ctx.beginPath();ctx.moveTo(0,i*s*0.22);ctx.quadraticCurveTo(s*0.25+Math.abs(i)*s*0.04,i*s*0.22,s*0.5-Math.abs(i)*s*0.1,i*s*0.32+i*s*0.05);ctx.stroke();if(i!==0){ctx.beginPath();ctx.moveTo(0,i*s*0.22);ctx.quadraticCurveTo(-s*0.25-Math.abs(i)*s*0.04,i*s*0.22,-s*0.5+Math.abs(i)*s*0.1,i*s*0.32+i*s*0.05);ctx.stroke();}}
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'fox':
      // body
      ctx.beginPath();ctx.ellipse(0,s*0.3,s*0.5,s*0.55,0,0,Math.PI*2);ctx.fill();
      // tail
      ctx.beginPath();ctx.moveTo(s*0.5,s*0.6);ctx.bezierCurveTo(s*1.1,s*0.4,s*1.2,-s*0.1,s*0.9,-s*0.3);ctx.bezierCurveTo(s*0.7,-s*0.15,s*0.7,s*0.2,s*0.5,s*0.6);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.4)';
      ctx.beginPath();ctx.ellipse(s*0.88,-s*0.28,s*0.12,s*0.18,-.5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // head
      ctx.beginPath();ctx.ellipse(0,-s*0.35,s*0.4,s*0.42,0,0,Math.PI*2);ctx.fill();
      // ears
      ctx.beginPath();ctx.moveTo(-s*0.3,-s*0.72);ctx.lineTo(-s*0.48,-s*1.08);ctx.lineTo(-s*0.08,-s*0.78);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.3,-s*0.72);ctx.lineTo(s*0.48,-s*1.08);ctx.lineTo(s*0.08,-s*0.78);ctx.closePath();ctx.fill();
      ctx.fillStyle='rgba(255,200,100,0.4)';
      ctx.beginPath();ctx.moveTo(-s*0.3,-s*0.75);ctx.lineTo(-s*0.42,-s*0.98);ctx.lineTo(-s*0.14,-s*0.8);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.3,-s*0.75);ctx.lineTo(s*0.42,-s*0.98);ctx.lineTo(s*0.14,-s*0.8);ctx.closePath();ctx.fill();
      ctx.fillStyle=color;
      // muzzle
      ctx.fillStyle='rgba(255,255,255,0.2)';
      ctx.beginPath();ctx.ellipse(0,-s*0.18,s*0.2,s*0.18,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.7)';ctx.beginPath();ctx.arc(0,-s*0.1,s*0.06,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.85)';ctx.beginPath();ctx.arc(-s*0.18,-s*0.45,s*0.1,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.18,-s*0.45,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.55)';ctx.beginPath();ctx.arc(-s*0.22,-s*0.48,s*0.04,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.14,-s*0.48,s*0.04,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    // ── GEMS ──
    case 'diamond': case 'ruby': case 'emerald': case 'amethyst': case 'sapphire': case 'topaz': case 'garnet':
      const facetN = type==='diamond'?8:type==='ruby'?6:type==='emerald'?4:7;
      ctx.beginPath();ctx.moveTo(0,-s*1.0);
      for(let i=0;i<facetN;i++){const a=-Math.PI/2+(i+1)*Math.PI*2/facetN;ctx.lineTo(Math.cos(a)*s*(i%2===0?0.9:1.0),Math.sin(a)*s*(i%2===0?0.9:1.0));}
      ctx.closePath();ctx.fill();
      // bottom
      ctx.beginPath();ctx.moveTo(0,-s*1.0);ctx.lineTo(-s*0.8,s*0.2);ctx.lineTo(0,s*1.0);ctx.lineTo(s*0.8,s*0.2);ctx.closePath();ctx.fill();
      // facets
      ctx.strokeStyle='rgba(255,255,255,0.3)'; ctx.lineWidth=lw*0.5;
      ctx.beginPath();ctx.moveTo(0,-s*1.0);ctx.lineTo(0,s*1.0);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.8,s*0.2);ctx.lineTo(s*0.8,s*0.2);ctx.stroke();
      // shine
      ctx.fillStyle='rgba(255,255,255,0.35)';
      ctx.beginPath();ctx.moveTo(-s*0.05,-s*0.9);ctx.lineTo(-s*0.35,-s*0.3);ctx.lineTo(-s*0.15,-s*0.28);ctx.lineTo(s*0.12,-s*0.88);ctx.closePath();ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.2)';
      ctx.beginPath();ctx.moveTo(s*0.1,-s*0.7);ctx.lineTo(s*0.4,-s*0.1);ctx.lineTo(s*0.55,-s*0.15);ctx.lineTo(s*0.3,-s*0.75);ctx.closePath();ctx.fill();
      break;
 
    case 'opal':
      ctx.beginPath();ctx.ellipse(0,0,s*0.75,s*0.9,0,0,Math.PI*2);ctx.fill();
      const opalColors=['rgba(255,100,200,0.3)','rgba(100,200,255,0.3)','rgba(200,255,100,0.3)','rgba(255,200,100,0.3)'];
      for(let i=0;i<12;i++){
        ctx.fillStyle=opalColors[i%4];
        const ox=(-0.5+Math.cos(i*137.5/180*Math.PI))*s*0.6;
        const oy=(-0.5+Math.sin(i*137.5/180*Math.PI))*s*0.75;
        ctx.beginPath();ctx.arc(ox,oy,s*0.2,0,Math.PI*2);ctx.fill();
      }
      ctx.strokeStyle='rgba(255,255,255,0.3)'; ctx.lineWidth=lw*0.4; ctx.fillStyle='none';
      ctx.beginPath();ctx.ellipse(0,0,s*0.75,s*0.9,0,0,Math.PI*2);ctx.stroke();
      ctx.fillStyle='rgba(255,255,255,0.25)';
      ctx.beginPath();ctx.ellipse(-s*0.2,-s*0.3,s*0.28,s*0.18,-.5,0,Math.PI*2);ctx.fill();
      break;
 
    case 'crystal':
      // cluster
      const cPts=[[-s*0.1,-s*1.0,-s*0.5,s*0.4],[s*0.15,-s*1.1,s*0.0,s*0.5],[s*0.5,-s*0.8,s*0.85,s*0.5],[-s*0.55,-s*0.75,-s*0.85,s*0.5]];
      cPts.forEach(([x1,y1,x2,y2])=>{
        ctx.globalAlpha=0.7;
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2-s*0.18,y2);ctx.lineTo(x2+s*0.18,y2);ctx.closePath();ctx.fill();
        ctx.globalAlpha=0.4;
        ctx.fillStyle='rgba(255,255,255,0.4)';
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x1+s*0.04,y1+s*0.3);ctx.lineTo(x2-s*0.18,y2);ctx.closePath();ctx.fill();
        ctx.fillStyle=color;
      });
      ctx.globalAlpha=1;
      ctx.beginPath();ctx.arc(0,0,s*0.25,0,Math.PI*2);ctx.fill();
      break;
 
    // ── BOOKS ──
    case 'spellbook':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.8,s*1.3,s*1.65,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.3)';
      ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.7,s*1.1,s*1.45,s*0.04);ctx.fill();
      ctx.fillStyle=color;
      star(ctx,5,s*0.38,s*0.16,0,-s*0.1);ctx.fill();
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.6;
      ctx.beginPath();ctx.moveTo(-s*0.45,s*0.5);ctx.lineTo(s*0.45,s*0.5);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.45,s*0.65);ctx.lineTo(s*0.3,s*0.65);ctx.stroke();
      ctx.fillStyle='rgba(255,220,0,0.8)';star(ctx,4,s*0.08,s*0.04,-s*0.5,-s*0.68);ctx.fill();
      ctx.fillStyle='rgba(255,220,0,0.5)';star(ctx,4,s*0.06,s*0.03,s*0.45,-s*0.65);ctx.fill();
      break;
 
    case 'atlas':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.8,s*1.3,s*1.65,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.08)';
      ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.7,s*1.1,s*1.45,s*0.04);ctx.fill();
      ctx.fillStyle=color;
      // globe
      ctx.beginPath();ctx.arc(0,-s*0.05,s*0.4,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.35; ctx.globalAlpha=0.4;
      ctx.beginPath();ctx.moveTo(-s*0.4,-s*0.05);ctx.lineTo(s*0.4,-s*0.05);ctx.stroke();
      ctx.beginPath();ctx.ellipse(0,-s*0.05,s*0.4,s*0.15,0,0,Math.PI*2);ctx.stroke();
      ctx.beginPath();ctx.moveTo(0,-s*0.45);ctx.lineTo(0,s*0.35);ctx.stroke();
      ctx.globalAlpha=1;
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.5;
      ctx.beginPath();ctx.moveTo(-s*0.45,s*0.55);ctx.lineTo(s*0.45,s*0.55);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.45,s*0.7);ctx.lineTo(s*0.25,s*0.7);ctx.stroke();
      break;
 
    case 'scroll':
      ctx.fillStyle=color;
      ctx.beginPath();ctx.roundRect(-s*0.6,-s*0.7,s*1.2,s*1.4,s*0.08);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.2)';
      ctx.beginPath();ctx.roundRect(-s*0.6,-s*0.72,s*1.2,s*0.25,s*0.08);ctx.fill();
      ctx.beginPath();ctx.roundRect(-s*0.6,s*0.47,s*1.2,s*0.25,s*0.08);ctx.fill();
      // rollers
      ctx.fillStyle=color;
      ctx.beginPath();ctx.ellipse(0,-s*0.72,s*0.6,s*0.14,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(0,s*0.72,s*0.6,s*0.14,0,0,Math.PI*2);ctx.fill();
      // lines
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.3; ctx.globalAlpha=0.25;
      for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(-s*0.42,-s*0.35+i*s*0.2);ctx.lineTo(s*0.42,-s*0.35+i*s*0.2);ctx.stroke();}
      ctx.globalAlpha=1;
      break;
 
    case 'diary':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.85,s*1.3,s*1.7,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.07)';
      ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.75,s*1.1,s*1.5,s*0.04);ctx.fill();
      ctx.fillStyle=color;
      // lock
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.8; ctx.fillStyle='none';
      ctx.beginPath();ctx.arc(0,-s*0.05,s*0.22,Math.PI,Math.PI*2);ctx.stroke();
      ctx.fillStyle=color;
      ctx.beginPath();ctx.roundRect(-s*0.28,s*0.1,s*0.56,s*0.38,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.4)';
      ctx.beginPath();ctx.arc(0,s*0.22,s*0.1,0,Math.PI*2);ctx.fill();
      // pages
      ctx.strokeStyle='rgba(255,255,255,0.15)'; ctx.lineWidth=1;
      for(let i=0;i<4;i++){ctx.beginPath();ctx.moveTo(s*0.62,-s*0.8+i*s*0.12);ctx.lineTo(s*0.65,-s*0.7+i*s*0.12);ctx.stroke();}
      // heart
      ctx.fillStyle='rgba(255,100,100,0.5)';
      ctx.beginPath();
      ctx.moveTo(0,-s*0.58);ctx.bezierCurveTo(s*0.22,-s*0.78,s*0.45,-s*0.6,s*0.0,-s*0.35);
      ctx.bezierCurveTo(-s*0.45,-s*0.6,-s*0.22,-s*0.78,0,-s*0.58);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'codex':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.85,s*1.3,s*1.7,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.2)';
      ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.75,s*1.1,s*1.5,s*0.04);ctx.fill();
      ctx.fillStyle=color;
      // code lines
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.55;
      const lines=[0.85,0.6,0.75,0.5,0.7,0.4];
      lines.forEach((w,i)=>{ctx.beginPath();ctx.moveTo(-s*0.42,-s*0.55+i*s*0.22);ctx.lineTo(-s*0.42+s*w*0.84,-s*0.55+i*s*0.22);ctx.stroke();});
      // brackets
      ctx.lineWidth=lw*1.2;
      ctx.beginPath();ctx.moveTo(-s*0.42,s*0.55);ctx.lineTo(-s*0.55,s*0.55);ctx.lineTo(-s*0.55,s*0.78);ctx.lineTo(-s*0.42,s*0.78);ctx.stroke();
      ctx.beginPath();ctx.moveTo(s*0.42,s*0.55);ctx.lineTo(s*0.55,s*0.55);ctx.lineTo(s*0.55,s*0.78);ctx.lineTo(s*0.42,s*0.78);ctx.stroke();
      break;
 
    case 'novel':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.85,s*1.3,s*1.7,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.06)';
      ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.75,s*1.1,s*1.5,s*0.04);ctx.fill();
      ctx.fillStyle=color;
      // quill
      ctx.lineWidth=lw*0.7;ctx.strokeStyle=color;
      ctx.beginPath();ctx.moveTo(-s*0.0,s*0.5);ctx.quadraticCurveTo(s*0.1,-s*0.3,s*0.3,-s*0.65);ctx.stroke();
      ctx.beginPath();ctx.moveTo(s*0.3,-s*0.65);ctx.bezierCurveTo(s*0.7,-s*0.95,s*0.72,-s*0.3,s*0.1,-s*0.1);
      ctx.bezierCurveTo(s*0.5,-s*0.2,s*0.55,-s*0.7,s*0.3,-s*0.65);ctx.fill();
      ctx.lineWidth=lw*0.35; ctx.globalAlpha=0.3;
      ctx.beginPath();ctx.moveTo(-s*0.42,s*0.55);ctx.lineTo(s*0.25,s*0.55);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.42,s*0.7);ctx.lineTo(s*0.0,s*0.7);ctx.stroke();
      ctx.globalAlpha=1;
      break;
 
    case 'poetry':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.85,s*1.3,s*1.7,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.06)';ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.75,s*1.1,s*1.5,s*0.04);ctx.fill();
      ctx.fillStyle=color;
      // music-like lines (poetry = rhythm)
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.45;
      const pLines=[0.7,0.45,0.6,0.38,0.65,0.42,0.5];
      pLines.forEach((w,i)=>{ctx.beginPath();ctx.moveTo(-s*0.42,-s*0.68+i*s*0.22);ctx.lineTo(-s*0.42+s*w*0.84,-s*0.68+i*s*0.22);ctx.stroke();});
      // rose
      ctx.fillStyle='rgba(255,100,150,0.7)';
      ctx.beginPath();ctx.arc(s*0.25,s*0.55,s*0.22,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,150,180,0.5)';
      ctx.beginPath();ctx.arc(s*0.15,s*0.45,s*0.14,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'sciencebook':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.85,s*1.3,s*1.7,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.2)';ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.75,s*1.1,s*1.5,s*0.04);ctx.fill();
      ctx.fillStyle=color;
      // atom
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.6; ctx.fillStyle='none';
      ctx.beginPath();ctx.ellipse(0,-s*0.12,s*0.42,s*0.18,0,0,Math.PI*2);ctx.stroke();
      ctx.beginPath();ctx.ellipse(0,-s*0.12,s*0.42,s*0.18,Math.PI/3,0,Math.PI*2);ctx.stroke();
      ctx.beginPath();ctx.ellipse(0,-s*0.12,s*0.42,s*0.18,-Math.PI/3,0,Math.PI*2);ctx.stroke();
      ctx.fillStyle=color;ctx.beginPath();ctx.arc(0,-s*0.12,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.4;
      ctx.beginPath();ctx.moveTo(-s*0.42,s*0.5);ctx.lineTo(s*0.42,s*0.5);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.42,s*0.65);ctx.lineTo(s*0.15,s*0.65);ctx.stroke();
      break;
 
    case 'ancientbook':
      ctx.beginPath();ctx.roundRect(-s*0.65,-s*0.85,s*1.3,s*1.7,s*0.08);ctx.fill();
      ctx.fillStyle='rgba(255,200,100,0.08)';ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.75,s*1.1,s*1.5,s*0.06);ctx.fill();
      ctx.fillStyle=color;
      // rune-like symbols
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.65;
      ctx.beginPath();ctx.moveTo(-s*0.1,-s*0.7);ctx.lineTo(-s*0.1,-s*0.35);ctx.moveTo(-s*0.28,-s*0.55);ctx.lineTo(s*0.08,-s*0.55);ctx.stroke();
      ctx.beginPath();ctx.arc(s*0.3,-s*0.55,s*0.18,0,Math.PI*2);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.32,-s*0.08);ctx.lineTo(s*0.32,-s*0.08);ctx.moveTo(0,-s*0.25);ctx.lineTo(0,s*0.1);ctx.stroke();
      // bottom rune
      ctx.beginPath();ctx.arc(0,s*0.45,s*0.22,0,Math.PI*2);ctx.stroke();
      ctx.beginPath();ctx.moveTo(-s*0.2,s*0.3);ctx.lineTo(0,s*0.62);ctx.lineTo(s*0.2,s*0.3);ctx.stroke();
      break;
 
    // ── WEATHER ──
    case 'storm':
      // cloud
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.2,s*0.38,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.18,-s*0.32,s*0.3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.42,-s*0.1,s*0.25,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.roundRect(-s*0.6,-s*0.15,s*1.05,s*0.35,s*0.12);ctx.fill();
      // rain
      ctx.strokeStyle=color; ctx.lineWidth=lw*0.55; ctx.globalAlpha=0.65;
      for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(-s*0.5+i*s*0.2,s*0.3);ctx.lineTo(-s*0.62+i*s*0.2,s*0.65);ctx.stroke();}
      ctx.globalAlpha=1;
      // lightning
      ctx.fillStyle='#fde68a';
      ctx.beginPath();ctx.moveTo(s*0.05,s*0.18);ctx.lineTo(-s*0.18,s*0.55);ctx.lineTo(s*0.02,s*0.52);ctx.lineTo(-s*0.12,s*0.88);ctx.lineTo(s*0.35,s*0.42);ctx.lineTo(s*0.12,s*0.45);ctx.lineTo(s*0.3,s*0.18);ctx.closePath();ctx.fill();
      break;
 
    case 'sunglow':
      // rays
      for(let i=0;i<12;i++){
        const a=i*Math.PI/6; ctx.globalAlpha=0.5+0.2*(i%2);
        ctx.strokeStyle=color; ctx.lineWidth=lw*(i%2===0?1:0.7);
        ctx.beginPath();ctx.moveTo(Math.cos(a)*s*0.55,Math.sin(a)*s*0.55);ctx.lineTo(Math.cos(a)*s*(i%2===0?1.0:0.85),Math.sin(a)*s*(i%2===0?1.0:0.85));ctx.stroke();
      }
      ctx.globalAlpha=1;
      // glow
      const sg=ctx.createRadialGradient(0,0,0,0,0,s*0.55);
      sg.addColorStop(0,color+'ff');sg.addColorStop(0.7,color+'cc');sg.addColorStop(1,color+'44');
      ctx.fillStyle=sg;ctx.beginPath();ctx.arc(0,0,s*0.55,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.25)';ctx.beginPath();ctx.arc(-s*0.15,-s*0.18,s*0.2,0,Math.PI*2);ctx.fill();
      break;
 
    case 'snowflake':
      ctx.lineWidth=lw*0.8;
      for(let i=0;i<6;i++){
        const a=i*Math.PI/3;
        ctx.strokeStyle=color;
        ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(a)*s*0.92,Math.sin(a)*s*0.92);ctx.stroke();
        const bx=Math.cos(a)*s*0.5,by=Math.sin(a)*s*0.5;
        for(let j=-1;j<=1;j+=2){
          const ba=a+j*Math.PI/3;
          ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx+Math.cos(ba)*s*0.28,by+Math.sin(ba)*s*0.28);ctx.stroke();
          const bx2=Math.cos(a)*s*0.72,by2=Math.sin(a)*s*0.72;
          ctx.beginPath();ctx.moveTo(bx2,by2);ctx.lineTo(bx2+Math.cos(ba)*s*0.18,by2+Math.sin(ba)*s*0.18);ctx.stroke();
        }
      }
      ctx.fillStyle=color;ctx.beginPath();ctx.arc(0,0,s*0.1,0,Math.PI*2);ctx.fill();
      for(let i=0;i<6;i++){const a=i*Math.PI/3;ctx.beginPath();ctx.arc(Math.cos(a)*s*0.92,Math.sin(a)*s*0.92,s*0.08,0,Math.PI*2);ctx.fill();}
      break;
 
    case 'rainbow':
      const rCols=['#f87171','#fb923c','#fbbf24','#4ade80','#60a5fa','#c084fc'];
      rCols.forEach((rc,i)=>{
        ctx.strokeStyle=rc; ctx.lineWidth=s*0.12; ctx.globalAlpha=0.85;
        ctx.beginPath();ctx.arc(0,s*0.3,(0.95-i*0.12)*s,Math.PI,Math.PI*2);ctx.stroke();
      });
      ctx.globalAlpha=1;
      // clouds
      ctx.fillStyle=color;
      ctx.beginPath();ctx.arc(-s*0.88,s*0.3,s*0.22,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(-s*0.65,s*0.15,s*0.18,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.88,s*0.3,s*0.22,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.65,s*0.15,s*0.18,0,Math.PI*2);ctx.fill();
      break;
 
    case 'tornado':
      const tLevels=[[s*0.7,s*0.58,0],[s*0.52,s*0.35,s*0.12],[s*0.38,s*0.15,s*0.08],[s*0.22,s*0.0,-s*0.1],[s*0.1,-s*0.12,-s*0.05]];
      tLevels.forEach(([hw,y,ox])=>{
        ctx.beginPath();ctx.ellipse(ox,y,hw,hw*0.22,0,0,Math.PI*2);ctx.fill();
      });
      // swirl lines
      ctx.strokeStyle=bg; ctx.lineWidth=lw*0.35; ctx.globalAlpha=0.3;
      ctx.beginPath();ctx.moveTo(0,-s*0.5);ctx.bezierCurveTo(-s*0.5,0,s*0.5,s*0.4,0,s*0.88);ctx.stroke();
      ctx.globalAlpha=1;
      // debris
      ctx.fillStyle=color;
      ctx.beginPath();ctx.roundRect(-s*0.88,s*0.5,s*0.18,s*0.1,2);ctx.fill();
      ctx.beginPath();ctx.roundRect(s*0.7,s*0.35,s*0.15,s*0.08,2);ctx.fill();
      break;
 
    case 'lightning':
      // cloud
      ctx.fillStyle=color; ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.arc(-s*0.15,-s*0.6,s*0.32,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.2,-s*0.7,s*0.24,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.roundRect(-s*0.45,-s*0.55,s*0.9,s*0.32,s*0.1);ctx.fill();
      ctx.globalAlpha=1;
      // bolt
      ctx.fillStyle='#fde68a';
      ctx.beginPath();ctx.moveTo(s*0.08,-s*0.22);ctx.lineTo(-s*0.25,s*0.35);ctx.lineTo(s*0.0,s*0.3);ctx.lineTo(-s*0.22,s*1.0);ctx.lineTo(s*0.42,s*0.15);ctx.lineTo(s*0.12,s*0.22);ctx.lineTo(s*0.38,-s*0.22);ctx.closePath();ctx.fill();
      // glow
      ctx.fillStyle='rgba(255,255,100,0.15)';
      ctx.beginPath();ctx.moveTo(s*0.08,-s*0.22);ctx.lineTo(-s*0.38,s*0.55);ctx.lineTo(s*0.08,s*0.45);ctx.lineTo(-s*0.3,s*1.1);ctx.lineTo(s*0.55,s*0.15);ctx.lineTo(s*0.25,s*0.25);ctx.lineTo(s*0.5,-s*0.22);ctx.closePath();ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'fog':
      ctx.globalAlpha=0.5;
      for(let i=0;i<6;i++){
        ctx.fillStyle=color;
        ctx.beginPath();ctx.roundRect(-s*0.8,-s*0.75+i*s*0.28,s*(0.8+Math.sin(i*1.5)*0.4)*2,s*0.16,s*0.08);ctx.fill();
      }
      ctx.globalAlpha=0.8;
      for(let i=0;i<5;i++){
        ctx.beginPath();ctx.roundRect(-s*0.7,-s*0.65+i*s*0.3,s*(0.6+Math.cos(i*1.5)*0.3)*2,s*0.12,s*0.06);ctx.fill();
      }
      ctx.globalAlpha=1; ctx.fillStyle=color;
      break;
 
    case 'aurora':
      for(let i=0;i<5;i++){
        ctx.globalAlpha=0.15+i*0.1;
        ctx.strokeStyle=['#4ade80','#22d3ee','#818cf8','#c084fc','#6ee7b7'][i];
        ctx.lineWidth=s*0.22;
        ctx.beginPath();ctx.moveTo(-s,-s*0.5+i*s*0.18);
        ctx.bezierCurveTo(-s*0.4,-s*(0.8-i*0.1),s*0.4,-s*(0.2+i*0.12),s,-s*(0.5-i*0.15));
        ctx.stroke();
      }
      ctx.globalAlpha=1;
      // stars
      ctx.fillStyle=color;
      for(let i=0;i<8;i++){const sx=(-0.9+i*0.26)*s; const sy=(-0.9+Math.sin(i*0.8)*0.25)*s;ctx.beginPath();ctx.arc(sx,sy,s*0.04,0,Math.PI*2);ctx.fill();}
      break;
 
    case 'hail':
      // cloud
      ctx.globalAlpha=0.75;
      ctx.beginPath();ctx.arc(-s*0.2,-s*0.4,s*0.38,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.2,-s*0.52,s*0.28,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.roundRect(-s*0.58,-s*0.32,s*1.05,s*0.32,s*0.1);ctx.fill();
      ctx.globalAlpha=1;
      // hailstones
      const hPos=[[-s*0.5,s*0.22],[s*0.0,s*0.15],[-s*0.25,s*0.55],[s*0.42,s*0.3],[-s*0.0,s*0.75],[s*0.22,s*0.6],[-s*0.42,s*0.8]];
      hPos.forEach(([hx,hy])=>{
        ctx.fillStyle='rgba(200,240,255,0.9)';ctx.beginPath();ctx.arc(hx,hy,s*0.1,0,Math.PI*2);ctx.fill();
        ctx.fillStyle='rgba(255,255,255,0.5)';ctx.beginPath();ctx.arc(hx-s*0.03,hy-s*0.03,s*0.04,0,Math.PI*2);ctx.fill();
      });
      ctx.fillStyle=color;
      break;
 
    // ── MYTHOLOGY ──
    case 'dragon':
      // body
      ctx.beginPath();ctx.ellipse(0,s*0.15,s*0.5,s*0.65,0,0,Math.PI*2);ctx.fill();
      // neck+head
      ctx.beginPath();ctx.ellipse(-s*0.05,-s*0.45,s*0.28,s*0.42,-.2,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*0.18,-s*0.9,s*0.32,s*0.28,.2,0,Math.PI*2);ctx.fill();
      // horns
      ctx.beginPath();ctx.moveTo(-s*0.28,-s*1.12);ctx.lineTo(-s*0.52,-s*1.48);ctx.lineTo(-s*0.2,-s*1.18);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(-s*0.05,-s*1.12);ctx.lineTo(-s*0.18,-s*1.45);ctx.lineTo(s*0.08,-s*1.15);ctx.closePath();ctx.fill();
      // wings
      ctx.globalAlpha=0.8;
      ctx.beginPath();ctx.moveTo(s*0.35,s*0.0);ctx.bezierCurveTo(s*0.9,-s*0.5,s*1.2,-s*0.2,s*1.05,s*0.3);ctx.bezierCurveTo(s*0.9,s*0.7,s*0.5,s*0.5,s*0.35,s*0.0);ctx.fill();
      ctx.globalAlpha=0.5;
      ctx.beginPath();ctx.moveTo(-s*0.35,-s*0.15);ctx.bezierCurveTo(-s*0.9,-s*0.65,-s*1.1,-s*0.25,-s*1.0,s*0.22);ctx.bezierCurveTo(-s*0.85,s*0.65,-s*0.45,s*0.45,-s*0.35,-s*0.15);ctx.fill();
      ctx.globalAlpha=1;
      // fire breath
      ctx.fillStyle='#f97316';
      ctx.beginPath();ctx.moveTo(-s*0.48,-s*0.82);ctx.bezierCurveTo(-s*0.85,-s*0.7,-s*1.05,-s*0.45,-s*0.95,-s*0.35);ctx.bezierCurveTo(-s*0.85,-s*0.28,-s*0.7,-s*0.4,-s*0.5,-s*0.78);ctx.fill();
      ctx.fillStyle='#fbbf24';
      ctx.beginPath();ctx.ellipse(-s*0.78,-s*0.55,s*0.18,s*0.1,.4,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // eye
      ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(-s*0.32,-s*0.92,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.ellipse(-s*0.32,-s*0.92,s*0.04,s*0.08,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'phoenix':
      // tail feathers
      const tAngles=[-0.6,-0.3,0,0.3,0.6];
      tAngles.forEach((ta,i)=>{
        ctx.globalAlpha=0.6+i*0.08;
        ctx.fillStyle=['#f97316','#ef4444','#fbbf24','#f97316','#ef4444'][i];
        ctx.beginPath();ctx.moveTo(0,s*0.4);ctx.bezierCurveTo(Math.cos(ta+Math.PI/2)*s*0.5,Math.sin(ta+Math.PI/2)*s*0.5+s*0.4,Math.cos(ta+Math.PI/2)*s*0.5,Math.sin(ta+Math.PI/2)*s*1.1+s*0.4,Math.cos(ta+Math.PI/2)*s*0.15,Math.sin(ta+Math.PI/2)*s*1.2+s*0.4);ctx.fill();
      });
      ctx.globalAlpha=1;
      // wings
      ctx.fillStyle=color;
      ctx.beginPath();ctx.moveTo(-s*0.1,0);ctx.bezierCurveTo(-s*0.8,-s*0.5,-s*0.9,0,-s*0.7,s*0.3);ctx.bezierCurveTo(-s*0.4,s*0.5,-s*0.1,s*0.3,-s*0.1,0);ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.1,0);ctx.bezierCurveTo(s*0.8,-s*0.5,s*0.9,0,s*0.7,s*0.3);ctx.bezierCurveTo(s*0.4,s*0.5,s*0.1,s*0.3,s*0.1,0);ctx.fill();
      // body
      ctx.beginPath();ctx.ellipse(0,s*0.1,s*0.28,s*0.42,0,0,Math.PI*2);ctx.fill();
      // head
      ctx.beginPath();ctx.arc(0,-s*0.4,s*0.28,0,Math.PI*2);ctx.fill();
      // crest
      const cAngles=[-0.3,0,0.3];
      cAngles.forEach(ca=>{ctx.beginPath();ctx.moveTo(0,-s*0.65);ctx.bezierCurveTo(Math.cos(ca-Math.PI/2)*s*0.2,Math.sin(ca-Math.PI/2)*s*0.2-s*0.65,Math.cos(ca-Math.PI/2)*s*0.3,Math.sin(ca-Math.PI/2)*s*0.45-s*0.65,0,-s*0.65);ctx.fill();});
      ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(s*0.12,-s*0.44,s*0.09,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(s*0.12,-s*0.44,s*0.05,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'unicorn':
      // body
      ctx.beginPath();ctx.ellipse(s*0.1,s*0.15,s*0.7,s*0.45,0.1,0,Math.PI*2);ctx.fill();
      // neck
      ctx.beginPath();ctx.ellipse(-s*0.32,-s*0.2,s*0.25,s*0.42,-.4,0,Math.PI*2);ctx.fill();
      // head
      ctx.beginPath();ctx.ellipse(-s*0.5,-s*0.58,s*0.32,s*0.28,.2,0,Math.PI*2);ctx.fill();
      // horn
      ctx.fillStyle='#fbbf24';
      ctx.beginPath();ctx.moveTo(-s*0.52,-s*0.82);ctx.lineTo(-s*0.68,-s*1.25);ctx.lineTo(-s*0.38,-s*0.82);ctx.closePath();ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.3)';
      ctx.beginPath();ctx.moveTo(-s*0.52,-s*0.82);ctx.lineTo(-s*0.62,-s*1.18);ctx.lineTo(-s*0.54,-s*0.82);ctx.closePath();ctx.fill();
      ctx.fillStyle=color;
      // mane
      const mColors=['#c084fc','#f472b6','#818cf8','#e879f9'];
      for(let i=0;i<4;i++){
        ctx.fillStyle=mColors[i]; ctx.globalAlpha=0.8;
        ctx.beginPath();ctx.moveTo(-s*0.25,-s*0.1-i*s*0.08);
        ctx.bezierCurveTo(s*0.05,-s*0.3-i*s*0.05,s*0.1,-s*0.0+i*s*0.1,-s*0.1,s*0.2+i*s*0.1);ctx.fill();
      }
      ctx.globalAlpha=1; ctx.fillStyle=color;
      // ear
      ctx.beginPath();ctx.moveTo(-s*0.3,-s*0.82);ctx.lineTo(-s*0.42,-s*1.05);ctx.lineTo(-s*0.18,-s*0.88);ctx.closePath();ctx.fill();
      // legs
      ctx.fillStyle=color;
      for(let [lx,ly] of [[-s*0.18,s*0.52],[s*0.1,s*0.55],[s*0.45,s*0.52],[s*0.72,s*0.5]]){ctx.beginPath();ctx.roundRect(lx-s*0.08,ly,s*0.12,s*0.42,s*0.04);ctx.fill();}
      // eye
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(-s*0.62,-s*0.62,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.5)';ctx.beginPath();ctx.arc(-s*0.65,-s*0.65,s*0.03,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'griffin':
      // lion body
      ctx.beginPath();ctx.ellipse(s*0.2,s*0.3,s*0.6,s*0.45,0,0,Math.PI*2);ctx.fill();
      // eagle head
      ctx.beginPath();ctx.ellipse(-s*0.38,-s*0.38,s*0.35,s*0.32,-.3,0,Math.PI*2);ctx.fill();
      // beak
      ctx.beginPath();ctx.moveTo(-s*0.65,-s*0.42);ctx.lineTo(-s*0.92,-s*0.28);ctx.lineTo(-s*0.65,-s*0.2);ctx.closePath();ctx.fill();
      // eagle wing
      ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(-s*0.4,-s*0.8,-s*0.85,-s*0.5,-s*0.7,s*0.1);ctx.bezierCurveTo(-s*0.5,s*0.4,-s*0.1,s*0.3,0,0);ctx.fill();
      ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.moveTo(0,0);ctx.bezierCurveTo(s*0.5,-s*0.8,s*0.95,-s*0.45,s*0.85,s*0.1);ctx.bezierCurveTo(s*0.65,s*0.45,s*0.15,s*0.35,0,0);ctx.fill();
      ctx.globalAlpha=1;
      // tail
      ctx.beginPath();ctx.moveTo(s*0.8,s*0.38);ctx.bezierCurveTo(s*1.1,s*0.1,s*1.2,-s*0.2,s*1.0,-s*0.32);ctx.bezierCurveTo(s*0.85,-s*0.18,s*0.85,s*0.1,s*0.8,s*0.38);ctx.fill();
      // talon
      ctx.fillStyle=color;
      for(let [lx,ly] of [[-s*0.12,s*0.68],[s*0.2,s*0.72],[s*0.55,s*0.65]]){ctx.beginPath();ctx.roundRect(lx-s*0.08,ly,s*0.12,s*0.38,s*0.04);ctx.fill();}
      // eye
      ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(-s*0.28,-s*0.45,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.ellipse(-s*0.28,-s*0.45,s*0.04,s*0.08,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'mermaid':
      // tail
      ctx.beginPath();ctx.ellipse(0,s*0.55,s*0.3,s*0.58,0,0,Math.PI*2);ctx.fill();
      // fins
      ctx.beginPath();ctx.moveTo(-s*0.28,s*1.08);ctx.bezierCurveTo(-s*0.65,s*1.02,-s*0.72,s*1.35,-s*0.45,s*1.38);ctx.bezierCurveTo(-s*0.2,s*1.4,-s*0.1,s*1.2,-s*0.1,s*1.08);ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.28,s*1.08);ctx.bezierCurveTo(s*0.65,s*1.02,s*0.72,s*1.35,s*0.45,s*1.38);ctx.bezierCurveTo(s*0.2,s*1.4,s*0.1,s*1.2,s*0.1,s*1.08);ctx.fill();
      // scale lines
      ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=lw*0.35;
      for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(0,s*0.25+i*s*0.2,s*(0.28-i*0.02),0,Math.PI);ctx.stroke();}
      ctx.fillStyle=color;
      // torso
      ctx.beginPath();ctx.ellipse(0,s*0.0,s*0.3,s*0.42,0,0,Math.PI*2);ctx.fill();
      // arms
      ctx.beginPath();ctx.ellipse(-s*0.45,s*0.1,s*0.18,s*0.42,-.4,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.45,s*0.1,s*0.18,s*0.42,.4,0,Math.PI*2);ctx.fill();
      // head
      ctx.beginPath();ctx.arc(0,-s*0.48,s*0.32,0,Math.PI*2);ctx.fill();
      // hair
      ctx.fillStyle='rgba(0,200,150,0.6)';
      ctx.beginPath();ctx.moveTo(-s*0.3,-s*0.72);ctx.bezierCurveTo(-s*0.7,-s*0.3,-s*0.68,s*0.2,-s*0.45,s*0.3);ctx.bezierCurveTo(-s*0.32,s*0.35,-s*0.28,s*0.1,-s*0.28,-s*0.18);ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.28,-s*0.72);ctx.bezierCurveTo(s*0.65,-s*0.38,s*0.62,s*0.1,s*0.42,s*0.25);ctx.bezierCurveTo(s*0.28,s*0.35,s*0.25,s*0.12,s*0.28,-s*0.18);ctx.fill();
      ctx.fillStyle=color;
      // eye
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(-s*0.1,-s*0.5,s*0.07,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.1,-s*0.5,s*0.07,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.5)';ctx.beginPath();ctx.arc(-s*0.12,-s*0.52,s*0.03,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.08,-s*0.52,s*0.03,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'medusa':
      // face
      ctx.beginPath();ctx.arc(0,-s*0.08,s*0.52,0,Math.PI*2);ctx.fill();
      // snake hair
      const snakeColors=['#4ade80','#22d3ee','#86efac','#34d399'];
      for(let i=0;i<8;i++){
        const a=i*Math.PI/4;
        ctx.fillStyle=snakeColors[i%4]; ctx.globalAlpha=0.9;
        const nx=Math.cos(a)*s*0.45, ny=Math.sin(a)*s*0.45-s*0.08;
        ctx.beginPath();ctx.moveTo(nx-Math.sin(a)*s*0.1,ny+Math.cos(a)*s*0.1);
        ctx.bezierCurveTo(nx+Math.cos(a)*s*0.35,ny+Math.sin(a)*s*0.35,nx+Math.cos(a)*s*0.55+Math.sin(a)*s*0.15,ny+Math.sin(a)*s*0.55-Math.cos(a)*s*0.15,nx+Math.cos(a)*s*0.7,ny+Math.sin(a)*s*0.55);
        ctx.lineWidth=lw*0.8; ctx.strokeStyle=snakeColors[i%4]; ctx.stroke();
        ctx.beginPath();ctx.arc(nx+Math.cos(a)*s*0.7,ny+Math.sin(a)*s*0.55,s*0.07,0,Math.PI*2);ctx.fill();
        // tongue
        ctx.strokeStyle='#f87171'; ctx.lineWidth=lw*0.25;
        ctx.beginPath();ctx.moveTo(nx+Math.cos(a)*s*0.7,ny+Math.sin(a)*s*0.55);ctx.lineTo(nx+Math.cos(a)*s*0.78,ny+Math.sin(a)*s*0.6);ctx.stroke();
      }
      ctx.globalAlpha=1; ctx.fillStyle=color;
      // eyes
      ctx.fillStyle='rgba(255,220,0,0.9)';
      ctx.beginPath();ctx.ellipse(-s*0.18,-s*0.15,s*0.14,s*0.1,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.18,-s*0.15,s*0.14,s*0.1,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.85)';
      ctx.beginPath();ctx.ellipse(-s*0.18,-s*0.15,s*0.05,s*0.09,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.18,-s*0.15,s*0.05,s*0.09,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'kraken':
      // body
      ctx.beginPath();ctx.ellipse(0,-s*0.15,s*0.55,s*0.62,0,0,Math.PI*2);ctx.fill();
      // tentacles
      for(let i=0;i<10;i++){
        const baseA=(i/10)*Math.PI*2;
        const bx=Math.cos(baseA)*s*0.45, by=Math.sin(baseA)*s*0.45-s*0.15;
        ctx.strokeStyle=color; ctx.lineWidth=s*(0.16-i*0.005); ctx.globalAlpha=0.85;
        ctx.beginPath();ctx.moveTo(bx,by);
        const wave=i%2===0?1:-1;
        ctx.bezierCurveTo(bx+Math.cos(baseA)*s*0.5+wave*s*0.3,by+Math.sin(baseA)*s*0.5,bx+Math.cos(baseA)*s*0.8-wave*s*0.2,by+Math.sin(baseA)*s*0.8,bx+Math.cos(baseA)*s*1.1,by+Math.sin(baseA)*s*1.0);
        ctx.stroke();
        // suckers
        ctx.fillStyle='rgba(0,0,0,0.3)';
        for(let j=1;j<=3;j++){ctx.beginPath();ctx.arc(bx+Math.cos(baseA)*j*s*0.28,by+Math.sin(baseA)*j*s*0.28,s*0.05,0,Math.PI*2);ctx.fill();}
      }
      ctx.globalAlpha=1; ctx.fillStyle=color;
      // eyes
      ctx.fillStyle='rgba(255,220,0,0.9)';
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.28,s*0.14,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.28,s*0.14,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.9)';
      ctx.beginPath();ctx.arc(-s*0.22,-s*0.28,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,-s*0.28,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'pegasus':
      // body
      ctx.beginPath();ctx.ellipse(s*0.08,s*0.2,s*0.6,s*0.45,0.1,0,Math.PI*2);ctx.fill();
      // neck+head
      ctx.beginPath();ctx.ellipse(-s*0.32,-s*0.18,s*0.22,s*0.42,-.3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*0.48,-s*0.58,s*0.28,s*0.28,.2,0,Math.PI*2);ctx.fill();
      // wings
      ctx.beginPath();ctx.moveTo(s*0.0,-s*0.05);ctx.bezierCurveTo(s*0.4,-s*0.85,s*0.9,-s*0.7,s*1.0,-s*0.05);ctx.bezierCurveTo(s*0.85,s*0.45,s*0.3,s*0.42,s*0.0,-s*0.05);ctx.fill();
      ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.moveTo(-s*0.12,-s*0.08);ctx.bezierCurveTo(-s*0.55,-s*0.88,-s*1.05,-s*0.68,-s*1.08,-s*0.02);ctx.bezierCurveTo(-s*0.9,s*0.42,-s*0.35,s*0.38,-s*0.12,-s*0.08);ctx.fill();
      ctx.globalAlpha=1;
      // feather lines
      ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=lw*0.4;
      for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(s*0.25-i*s*0.12,-s*0.05+i*s*0.12);ctx.lineTo(s*0.8-i*s*0.08,-s*0.52+i*s*0.08);ctx.stroke();}
      ctx.fillStyle=color;
      // legs
      for(let [lx,ly] of [[-s*0.12,s*0.55],[s*0.22,s*0.58],[s*0.52,s*0.52],[s*0.78,s*0.48]]){ctx.beginPath();ctx.roundRect(lx-s*0.07,ly,s*0.11,s*0.45,s*0.04);ctx.fill();}
      // mane
      ctx.fillStyle='rgba(200,180,255,0.7)';
      for(let i=0;i<3;i++){ctx.beginPath();ctx.moveTo(-s*0.28,-s*0.08-i*s*0.1);ctx.bezierCurveTo(-s*0.05,-s*0.28-i*s*0.05,-s*0.0,-s*0.05+i*s*0.1,-s*0.18,s*0.15+i*s*0.1);ctx.fill();}
      ctx.fillStyle=color;
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(-s*0.58,-s*0.62,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.5)';ctx.beginPath();ctx.arc(-s*0.61,-s*0.65,s*0.03,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'sphinx':
      ctx.beginPath();ctx.ellipse(s*0.18,s*0.35,s*0.7,s*0.5,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.roundRect(-s*0.4,s*0.6,s*0.28,s*0.45,s*0.08);ctx.fill();
      ctx.beginPath();ctx.roundRect(-s*0.05,s*0.62,s*0.28,s*0.43,s*0.08);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*0.12,-s*0.08,s*0.3,s*0.45,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(-s*0.12,-s*0.58,s*0.32,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#d97706';
      ctx.beginPath();ctx.moveTo(-s*0.4,-s*0.42);ctx.lineTo(-s*0.52,s*0.18);ctx.lineTo(-s*0.32,s*0.18);ctx.lineTo(-s*0.12,-s*0.28);ctx.closePath();ctx.fill();
      ctx.beginPath();ctx.moveTo(s*0.16,-s*0.42);ctx.lineTo(s*0.28,s*0.18);ctx.lineTo(s*0.08,s*0.18);ctx.lineTo(-s*0.12,-s*0.28);ctx.closePath();ctx.fill();
      ctx.fillStyle=color;
      ctx.beginPath();ctx.roundRect(-s*0.45,-s*0.85,s*0.66,s*0.28,s*0.04);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.8)';ctx.beginPath();ctx.arc(-s*0.24,-s*0.62,s*0.09,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.0,-s*0.62,s*0.09,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,200,50,0.8)';ctx.beginPath();ctx.arc(-s*0.24,-s*0.62,s*0.05,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.0,-s*0.62,s*0.05,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,0,0,0.9)';ctx.beginPath();ctx.arc(-s*0.24,-s*0.62,s*0.03,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(s*0.0,-s*0.62,s*0.03,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      // tail
      ctx.beginPath();ctx.moveTo(s*0.88,s*0.2);ctx.bezierCurveTo(s*1.1,s*0.0,s*1.15,-s*0.25,s*0.95,-s*0.32);ctx.bezierCurveTo(s*0.78,-s*0.18,s*0.78,s*0.05,s*0.88,s*0.2);ctx.fill();
      break;
 
    // ── FOOD ──
    case 'pizza':
      // slice base
      ctx.beginPath();ctx.moveTo(0,s*0.75);ctx.lineTo(-s*0.72,-s*0.52);ctx.bezierCurveTo(-s*0.3,-s*0.78,s*0.3,-s*0.78,s*0.72,-s*0.52);ctx.closePath();ctx.fill();
      // crust
      ctx.fillStyle='#d97706';
      ctx.beginPath();ctx.moveTo(-s*0.72,-s*0.52);ctx.bezierCurveTo(-s*0.3,-s*0.78,s*0.3,-s*0.78,s*0.72,-s*0.52);ctx.lineTo(s*0.62,-s*0.42);ctx.bezierCurveTo(s*0.24,-s*0.65,-s*0.24,-s*0.65,-s*0.62,-s*0.42);ctx.closePath();ctx.fill();
      // sauce & toppings
      ctx.fillStyle='#ef4444'; ctx.globalAlpha=0.6;
      ctx.beginPath();ctx.moveTo(0,s*0.6);ctx.lineTo(-s*0.58,-s*0.42);ctx.bezierCurveTo(-s*0.22,-s*0.65,s*0.22,-s*0.65,s*0.58,-s*0.42);ctx.closePath();ctx.fill();
      ctx.globalAlpha=1;
      // cheese
      ctx.fillStyle='#fbbf24'; ctx.globalAlpha=0.7;
      ctx.beginPath();ctx.ellipse(0,s*0.1,s*0.38,s*0.45,0,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1; ctx.fillStyle='#dc2626';
      ctx.beginPath();ctx.arc(-s*0.15,-s*0.05,s*0.12,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.22,s*0.18,s*0.1,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.02,s*0.45,s*0.09,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(-s*0.2,s*0.3,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'sushi':
      // roll
      ctx.beginPath();ctx.ellipse(0,0,s*0.65,s*0.7,0,0,Math.PI*2);ctx.fill();
      // nori
      ctx.fillStyle='rgba(0,0,0,0.7)';
      ctx.beginPath();ctx.ellipse(0,0,s*0.65,s*0.7,0,0,Math.PI*2);ctx.fill();
      // rice
      ctx.fillStyle='rgba(255,255,255,0.9)';
      ctx.beginPath();ctx.ellipse(0,0,s*0.55,s*0.58,0,0,Math.PI*2);ctx.fill();
      // filling
      ctx.fillStyle='#f87171';
      ctx.beginPath();ctx.ellipse(0,0,s*0.28,s*0.3,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(0,200,100,0.7)';
      ctx.beginPath();ctx.ellipse(-s*0.08,s*0.05,s*0.12,s*0.14,.3,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,200,0,0.8)';
      ctx.beginPath();ctx.arc(s*0.08,-s*0.05,s*0.08,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'taco':
      // shell
      ctx.beginPath();ctx.moveTo(-s*0.85,s*0.38);ctx.bezierCurveTo(-s*0.85,-s*0.2,0,-s*0.8,0,-s*0.82);ctx.bezierCurveTo(0,-s*0.8,s*0.85,-s*0.2,s*0.85,s*0.38);ctx.bezierCurveTo(s*0.65,s*0.7,0,s*0.72,0,s*0.72);ctx.bezierCurveTo(0,s*0.72,-s*0.65,s*0.7,-s*0.85,s*0.38);ctx.closePath();ctx.fill();
      // fillings
      ctx.fillStyle='#dc2626';
      ctx.beginPath();ctx.roundRect(-s*0.62,-s*0.1,s*1.24,s*0.42,s*0.05);ctx.fill();
      ctx.fillStyle='#4ade80';
      ctx.beginPath();ctx.roundRect(-s*0.55,-s*0.28,s*1.1,s*0.25,s*0.04);ctx.fill();
      ctx.fillStyle='#fbbf24';
      ctx.beginPath();ctx.roundRect(-s*0.5,-s*0.42,s*1.0,s*0.2,s*0.03);ctx.fill();
      // sour cream
      ctx.fillStyle='rgba(255,255,255,0.9)';
      ctx.beginPath();ctx.ellipse(s*0.2,-s*0.2,s*0.22,s*0.12,.5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'ramen':
      // bowl
      ctx.beginPath();ctx.moveTo(-s*0.88,s*0.08);ctx.bezierCurveTo(-s*0.88,s*0.75,-s*0.35,s*1.0,0,s*1.0);ctx.bezierCurveTo(s*0.35,s*1.0,s*0.88,s*0.75,s*0.88,s*0.08);ctx.closePath();ctx.fill();
      // broth
      ctx.fillStyle='#d97706'; ctx.globalAlpha=0.4;
      ctx.beginPath();ctx.ellipse(0,s*0.1,s*0.88,s*0.28,0,0,Math.PI*2);ctx.fill();
      ctx.globalAlpha=1;
      // noodles
      ctx.strokeStyle='#fde68a'; ctx.lineWidth=lw*0.7; ctx.globalAlpha=0.9;
      for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(-s*0.7,s*0.1);ctx.bezierCurveTo(-s*0.3,s*(0.05-i*0.05),s*0.3,s*(0.15-i*0.05),s*0.7,s*0.1);ctx.stroke();}
      ctx.globalAlpha=1;
      // egg
      ctx.fillStyle='rgba(255,255,255,0.9)';ctx.beginPath();ctx.arc(-s*0.3,s*0.0,s*0.22,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#fbbf24';ctx.beginPath();ctx.arc(-s*0.3,-s*0.02,s*0.14,0,Math.PI*2);ctx.fill();
      // meat slice
      ctx.fillStyle='#dc2626';ctx.beginPath();ctx.ellipse(s*0.3,-s*0.02,s*0.22,s*0.18,0.2,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.3)';ctx.beginPath();ctx.ellipse(s*0.3,-s*0.02,s*0.14,s*0.1,0.2,0,Math.PI*2);ctx.fill();
      // bowl rim
      ctx.fillStyle=color;
      ctx.beginPath();ctx.ellipse(0,s*0.1,s*0.88,s*0.25,0,0,Math.PI*2);ctx.fill();
      break;
 
    case 'cake':
      // layers
      ctx.fillStyle=color;
      ctx.beginPath();ctx.roundRect(-s*0.68,s*0.15,s*1.36,s*0.65,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.18)';
      ctx.beginPath();ctx.roundRect(-s*0.6,s*0.18,s*1.2,s*0.2,s*0.03);ctx.fill();
      ctx.fillStyle=color;
      ctx.beginPath();ctx.roundRect(-s*0.58,-s*0.25,s*1.16,s*0.45,s*0.05);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.15)';
      ctx.beginPath();ctx.roundRect(-s*0.5,-s*0.22,s*1.0,s*0.15,s*0.03);ctx.fill();
      ctx.fillStyle=color;
      // frosting drips
      ctx.fillStyle='rgba(255,255,255,0.85)';
      for(let i=0;i<8;i++){ctx.beginPath();ctx.arc(-s*0.55+i*s*0.16,-s*0.26,s*0.1,Math.PI,Math.PI*2);ctx.fill();}
      // candles
      ctx.fillStyle='#f87171';
      ctx.beginPath();ctx.roundRect(-s*0.22,-s*0.72,s*0.1,s*0.5,s*0.03);ctx.fill();
      ctx.fillStyle='#4ade80';
      ctx.beginPath();ctx.roundRect(s*0.08,-s*0.68,s*0.1,s*0.46,s*0.03);ctx.fill();
      ctx.fillStyle='#60a5fa';
      ctx.beginPath();ctx.roundRect(-s*0.52,-s*0.64,s*0.1,s*0.38,s*0.03);ctx.fill();
      
      ctx.fillStyle='#fbbf24';
      ctx.beginPath();ctx.ellipse(-s*0.17,-s*0.76,s*0.07,s*0.1,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.13,-s*0.72,s*0.07,s*0.1,0,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*0.47,-s*0.68,s*0.07,s*0.1,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'lemon':
      ctx.beginPath();ctx.ellipse(0,0,s*0.78,s*0.58,0,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.2)';
      ctx.beginPath();ctx.ellipse(-s*0.22,-s*0.18,s*0.25,s*0.18,-.4,0,Math.PI*2);ctx.fill();
     
      ctx.strokeStyle='rgba(255,255,255,0.15)'; ctx.lineWidth=lw*0.4;
      for(let i=0;i<6;i++){ctx.beginPath();ctx.moveTo(0,0);const a=i*Math.PI/3;ctx.lineTo(Math.cos(a)*s*0.78,Math.sin(a)*s*0.58);ctx.stroke();}
      ctx.fillStyle='none'; ctx.strokeStyle='rgba(255,255,255,0.15)';
      ctx.beginPath();ctx.ellipse(0,0,s*0.45,s*0.35,0,0,Math.PI*2);ctx.stroke();
      ctx.fillStyle=color;
      
      ctx.beginPath();ctx.ellipse(s*0.82,0,s*0.12,s*0.08,0.2,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(-s*0.82,0,s*0.12,s*0.08,0.2,0,Math.PI*2);ctx.fill();
      break;
 
    case 'avocado':
    
      ctx.beginPath();ctx.moveTo(0,-s*0.95);ctx.bezierCurveTo(s*0.55,-s*0.5,s*0.7,s*0.2,s*0.55,s*0.62);ctx.bezierCurveTo(s*0.35,s*1.0,-s*0.35,s*1.0,-s*0.55,s*0.62);ctx.bezierCurveTo(-s*0.7,s*0.2,-s*0.55,-s*0.5,0,-s*0.95);ctx.fill();
      
      ctx.fillStyle='#86efac'; ctx.globalAlpha=0.8;
      ctx.beginPath();ctx.moveTo(0,-s*0.72);ctx.bezierCurveTo(s*0.38,-s*0.35,s*0.48,s*0.15,s*0.36,s*0.52);ctx.bezierCurveTo(s*0.22,s*0.82,-s*0.22,s*0.82,-s*0.36,s*0.52);ctx.bezierCurveTo(-s*0.48,s*0.15,-s*0.38,-s*0.35,0,-s*0.72);ctx.fill();
      ctx.globalAlpha=1;
    
      ctx.fillStyle='#d97706';
      ctx.beginPath();ctx.arc(0,s*0.18,s*0.32,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.2)';
      ctx.beginPath();ctx.arc(-s*0.1,s*0.08,s*0.12,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      break;
 
    case 'burger':
      
      ctx.beginPath();ctx.moveTo(-s*0.72,-s*0.15);ctx.bezierCurveTo(-s*0.72,-s*0.72,s*0.72,-s*0.72,s*0.72,-s*0.15);ctx.closePath();ctx.fill();
     
      ctx.fillStyle='rgba(255,255,255,0.5)';
      ctx.beginPath();ctx.ellipse(-s*0.2,-s*0.48,s*0.07,s*0.04,0.5,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.15,-s*0.55,s*0.07,s*0.04,-0.3,0,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.ellipse(s*0.42,-s*0.42,s*0.06,s*0.04,0.5,0,Math.PI*2);ctx.fill();
      ctx.fillStyle=color;
      
      ctx.fillStyle='#4ade80';
      ctx.beginPath();ctx.roundRect(-s*0.78,-s*0.18,s*1.56,s*0.2,s*0.06);ctx.fill();
    
      ctx.fillStyle='#ef4444';
      ctx.beginPath();ctx.roundRect(-s*0.72,-s*0.0,s*1.44,s*0.18,s*0.04);ctx.fill();
     
      ctx.fillStyle='#fbbf24';
      ctx.beginPath();ctx.roundRect(-s*0.78,s*0.15,s*1.56,s*0.18,s*0.03);ctx.fill();
      
      ctx.fillStyle='#92400e';
      ctx.beginPath();ctx.roundRect(-s*0.75,s*0.3,s*1.5,s*0.28,s*0.05);ctx.fill();
      ctx.fillStyle=color;
      ctx.beginPath();ctx.roundRect(-s*0.78,s*0.55,s*1.56,s*0.35,s*0.08);ctx.fill();
      break;
 
    case 'icecream':
      ctx.beginPath();ctx.moveTo(-s*0.42,s*0.2);ctx.lineTo(s*0.42,s*0.2);ctx.lineTo(0,s*1.08);ctx.closePath();ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,0.2)'; ctx.lineWidth=lw*0.35;
      for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(-s*0.42+i*s*0.08,s*0.2+i*s*0.18);ctx.lineTo(s*0.1+i*s*0.08,s*1.08-i*s*0.15);ctx.stroke();}
      for(let i=0;i<5;i++){ctx.beginPath();ctx.moveTo(s*0.42-i*s*0.08,s*0.2+i*s*0.18);ctx.lineTo(-s*0.1-i*s*0.08,s*1.08-i*s*0.15);ctx.stroke();}
      ctx.fillStyle=color;
      ctx.fillStyle='#c084fc';
      ctx.beginPath();ctx.arc(0,-s*0.42,s*0.52,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#f472b6';
      ctx.beginPath();ctx.arc(-s*0.28,-s*0.02,s*0.38,Math.PI,Math.PI*2);ctx.fill();
      ctx.beginPath();ctx.arc(s*0.28,-s*0.02,s*0.38,Math.PI,Math.PI*2);ctx.fill();
      ctx.fillStyle='rgba(255,255,255,0.25)';
      ctx.beginPath();ctx.arc(-s*0.3,-s*0.6,s*0.18,0,Math.PI*2);ctx.fill();
      ctx.fillStyle='#dc2626';
      ctx.beginPath();ctx.arc(s*0.05,-s*0.88,s*0.14,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='#4ade80'; ctx.lineWidth=lw*0.5;
      ctx.beginPath();ctx.moveTo(s*0.05,-s*0.88);ctx.quadraticCurveTo(s*0.28,-s*1.05,s*0.22,-s*1.2);ctx.stroke();
      ctx.fillStyle=color;
      break;
 
    default:
      star(ctx, 5, s*0.85, s*0.38); ctx.fill();
      break;
  }
}
 
const DIFFS = [
  {cols:4, rows:3, time:60,  label:'Starter'},
  {cols:4, rows:4, time:80,  label:'Easy'},
  {cols:5, rows:4, time:100, label:'Medium'},
  {cols:6, rows:4, time:110, label:'Hard'},
  {cols:6, rows:5, time:130, label:'Expert'},
  {cols:6, rows:6, time:150, label:'Master'},
];
 
let currentTheme = 'space';
let currentDiff = 0;
let cards = [], flipped = [], matchedCount = 0, moves = 0;
let combo = 0, score = 0;
let elapsed = 0, timerInt = null, started = false, locked = false, frozen = false;
let puPeek = 2, puElim = 1, puFreeze = 1, puHint = 2;
let modalNextFn = null;
 
function buildThemeBar() {
  const bar = document.getElementById('theme-bar');
  bar.innerHTML = '';
  Object.entries(THEMES).forEach(([key, t]) => {
    const btn = document.createElement('button');
    btn.className = 'theme-btn' + (key === currentTheme ? ' active' : '');
    btn.textContent = t.label;
    btn.onclick = () => { currentTheme = key; buildThemeBar(); newGame(); };
    bar.appendChild(btn);
  });
}
 
function buildLevelProgress() {
  const el = document.getElementById('level-progress');
  el.innerHTML = '';
  DIFFS.forEach((d, i) => {
    const dot = document.createElement('div');
    dot.className = 'lp-dot' + (i < currentDiff ? ' done' : i === currentDiff ? ' current' : '');
    dot.title = d.label;
    el.appendChild(dot);
  });
}
 
function newGame() {
  clearInterval(timerInt);
  const diff = DIFFS[currentDiff];
  const theme = THEMES[currentTheme];
  const totalCards = diff.cols * diff.rows;
  const pairs = totalCards / 2;
  const pool = theme.cards.slice(0, pairs);
  const deck = [...pool, ...pool]
    .sort(() => Math.random() - 0.5)
    .map((c, idx) => ({ ...c, idx, up: false, done: false }));
  cards = deck;
  flipped = []; matchedCount = 0; moves = 0; combo = 0; score = 0;
  elapsed = 0; started = false; locked = false; frozen = false;
  puPeek = 2; puElim = 1; puFreeze = 1; puHint = 2;
  updateHUD();
  updatePU();
  renderGrid();
  buildLevelProgress();
  setMsg('Tap a card to start!');
  document.getElementById('bar').style.width = '100%';
  document.getElementById('bar').style.background = 'var(--accent)';
  document.getElementById('level-badge').textContent = `Level ${currentDiff + 1} — ${diff.label}`;
}
 
function renderGrid() {
  const diff = DIFFS[currentDiff];
  const grid = document.getElementById('grid');
  grid.style.gridTemplateColumns = `repeat(${diff.cols}, 1fr)`;
  grid.innerHTML = '';
  const sz = Math.min(110, Math.floor((Math.min(860, window.innerWidth) - 40 - (diff.cols - 1) * 8) / diff.cols));
  cards.forEach((card, i) => {
    const div = document.createElement('div');
    div.className = 'card' + (card.up || card.done ? ' up' : '') + (card.done ? ' done' : '');
    div.style.height = sz + 'px';
    const inner = document.createElement('div');
    inner.className = 'card-inner';
    const front = document.createElement('div');
    front.className = 'card-front';
    front.style.cssText = 'display:flex;align-items:center;justify-content:center;';
    const fCv = document.createElement('canvas');
    fCv.width = fCv.height = sz;
    const fCtx = fCv.getContext('2d');
    fCtx.fillStyle = '#13131f';
    fCtx.fillRect(0, 0, sz, sz);
    fCtx.strokeStyle = 'rgba(124,111,255,0.18)';
    fCtx.lineWidth = 1;
    const gs = sz / 5;
    for (let r = 0; r <= 5; r++) { fCtx.beginPath(); fCtx.moveTo(0, r * gs); fCtx.lineTo(sz, r * gs); fCtx.stroke(); }
    for (let c = 0; c <= 5; c++) { fCtx.beginPath(); fCtx.moveTo(c * gs, 0); fCtx.lineTo(c * gs, sz); fCtx.stroke(); }
    fCtx.strokeStyle = 'rgba(124,111,255,0.4)';
    fCtx.lineWidth = 1.5;
    fCtx.strokeRect(3, 3, sz - 6, sz - 6);
    fCtx.fillStyle = 'rgba(124,111,255,0.15)';
    fCtx.beginPath(); fCtx.arc(sz / 2, sz / 2, sz * 0.22, 0, Math.PI * 2); fCtx.fill();
    fCtx.fillStyle = 'rgba(124,111,255,0.4)';
    star_draw(fCtx, sz / 2, sz / 2, sz * 0.16, sz * 0.08, 4);
    fCtx.fill();
    fCv.style.width = fCv.style.height = '100%';
    front.appendChild(fCv);
    const back = document.createElement('div');
    back.className = 'card-back';
    const bCv = document.createElement('canvas');
    bCv.width = bCv.height = sz;
    drawCard(bCv, card, sz);
    bCv.style.width = bCv.style.height = '100%';
    back.appendChild(bCv);
    inner.appendChild(front);
    inner.appendChild(back);
    div.appendChild(inner);
    div.addEventListener('click', () => flip(i));
    grid.appendChild(div);
  });
}
 
function star_draw(ctx, cx, cy, r1, r2, n) {
  ctx.beginPath();
  for (let i = 0; i < n * 2; i++) {
    const a = (i * Math.PI / n) - Math.PI / 2;
    const r = i % 2 === 0 ? r1 : r2;
    i === 0 ? ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r) : ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
  }
  ctx.closePath();
}
 
function refreshCard(i) {
  const els = document.getElementById('grid').children;
  if (!els[i]) return;
  const c = cards[i];
  els[i].className = 'card' + (c.up || c.done ? ' up' : '') + (c.done ? ' done' : '');
}
 
function flip(i) {
  if (!started) startTimer();
  if (locked || cards[i].up || cards[i].done) return;
  cards[i].up = true;
  flipped.push(i);
  refreshCard(i);
  if (flipped.length === 2) {
    moves++;
    locked = true;
    const [a, b] = flipped;
    if (cards[a].name === cards[b].name) {
      combo++;
      const pts = 10 * combo + (combo > 2 ? combo * 5 : 0);
      score += pts;
      popCombo(combo, pts);
      setTimeout(() => {
        cards[a].done = cards[b].done = true;
        cards[a].up = cards[b].up = true;
        refreshCard(a); refreshCard(b);
        flipped = []; locked = false; matchedCount++;
        updateHUD();
        if (matchedCount === cards.length / 2) onWin();
        else setMsg(combo > 2 ? `🔥 ${combo}× combo! +${pts}` : `Nice! +${pts} pts`);
      }, 280);
    } else {
      combo = 0;
      updateHUD();
      const els = document.getElementById('grid').children;
      if (els[a]) els[a].classList.add('wrong');
      if (els[b]) els[b].classList.add('wrong');
      setTimeout(() => {
        cards[a].up = cards[b].up = false;
        refreshCard(a); refreshCard(b);
        if (els[a]) els[a].classList.remove('wrong');
        if (els[b]) els[b].classList.remove('wrong');
        flipped = []; locked = false;
        setMsg(['Try again!', 'Not quite!', 'Keep going!', 'Almost!'][Math.floor(Math.random() * 4)]);
      }, 800);
    }
    updateHUD();
  }
}
 
function popCombo(c, pts) {
  if (c < 2) return;
  const el = document.createElement('div');
  el.className = 'combo-pop';
  el.textContent = c > 2 ? `🔥 ${c}× Combo! +${pts}` : `+${pts}`;
  el.style.cssText = `left:${20 + Math.random() * 50}%;top:35%;font-size:${c > 3 ? 28 : 20}px;color:${c > 3 ? '#f87171' : '#fbbf24'};`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}
 
function startTimer() {
  started = true;
  timerInt = setInterval(() => {
    if (frozen) return;
    elapsed++;
    const left = Math.max(0, DIFFS[currentDiff].time - elapsed);
    document.getElementById('s-time').textContent = left + 's';
    const pct = left / DIFFS[currentDiff].time * 100;
    document.getElementById('bar').style.width = pct + '%';
    document.getElementById('bar').style.background = pct < 20 ? '#f87171' : pct < 50 ? '#f97316' : 'var(--accent)';
    if (left <= 0) { clearInterval(timerInt); onTimeout(); }
  }, 1000);
}
function usePeek() {
  if (puPeek <= 0 || locked) return;
  puPeek--; updatePU();
  setMsg('👁 Peek — memorize fast!');
  const els = document.getElementById('grid').children;
  cards.forEach((c, i) => { if (!c.done) { c.up = true; els[i] && (els[i].className = 'card up'); } });
  setTimeout(() => {
    cards.forEach((c, i) => { if (!c.done && !flipped.includes(i)) { c.up = false; els[i] && (els[i].className = 'card'); } });
    setMsg('Peek done!');
  }, 2200);
}
 
function useElim() {
  if (puElim <= 0 || locked) return;
  puElim--; updatePU();
  const unmatched = {};
  cards.forEach((c, i) => { if (!c.done) { (unmatched[c.name] = unmatched[c.name] || []).push(i); } });
  const pairs = Object.values(unmatched).filter(p => p.length === 2);
  if (!pairs.length) return;
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  pair.forEach(i => { cards[i].done = cards[i].up = true; refreshCard(i); });
  matchedCount++;
  score += 5;
  updateHUD();
  setMsg('💥 Pair eliminated!');
  if (matchedCount === cards.length / 2) setTimeout(onWin, 400);
}
 
function useFreeze() {
  if (puFreeze <= 0) return;
  puFreeze--; frozen = true; updatePU();
  setMsg('❄️ Timer frozen for 10s!');
  setTimeout(() => { frozen = false; setMsg('Timer resumed.'); updatePU(); }, 10000);
}
 
function useHint() {
  if (puHint <= 0 || locked) return;
  puHint--; updatePU();
  const unmatched = {};
  cards.forEach((c, i) => { if (!c.done && !c.up) { (unmatched[c.name] = unmatched[c.name] || []).push(i); } });
  const pairs = Object.values(unmatched).filter(p => p.length === 2);
  if (!pairs.length) return;
  const pair = pairs[Math.floor(Math.random() * pairs.length)];
  const els = document.getElementById('grid').children;
  pair.forEach(i => { if (els[i]) { els[i].style.outline = '2px solid #fbbf24'; els[i].style.outlineOffset = '2px'; } });
  setMsg('💡 Pair highlighted!');
  setTimeout(() => { pair.forEach(i => { if (els[i]) { els[i].style.outline = ''; els[i].style.outlineOffset = ''; } }); }, 1500);
}
 
function updateHUD() {
  document.getElementById('s-score').textContent = score;
  document.getElementById('s-pairs').textContent = matchedCount + '/' + (cards.length / 2);
  document.getElementById('s-moves').textContent = moves;
  document.getElementById('s-combo').textContent = '×' + Math.max(1, combo);
  if (!started) document.getElementById('s-time').textContent = DIFFS[currentDiff].time + 's';
}
 
function updatePU() {
  document.getElementById('pc-peek').textContent = puPeek;
  document.getElementById('pc-elim').textContent = puElim;
  document.getElementById('pc-freeze').textContent = puFreeze;
  document.getElementById('pc-hint').textContent = puHint;
  document.getElementById('pu-peek').disabled = puPeek <= 0;
  document.getElementById('pu-elim').disabled = puElim <= 0;
  document.getElementById('pu-freeze').disabled = puFreeze <= 0;
  document.getElementById('pu-hint').disabled = puHint <= 0;
}
 
function setMsg(m) { document.getElementById('msg').textContent = m; }
 
function getStars() {
  const d = DIFFS[currentDiff];
  const left = d.time - elapsed;
  const pairs = cards.length / 2;
  if (left > d.time * 0.55 && moves <= pairs + 2) return 3;
  if (left > d.time * 0.22) return 2;
  return 1;
}
 
function onWin() {
  clearInterval(timerInt);
  const stars = getStars();
  const bonus = stars * 50;
  score += bonus;
  updateHUD();
  const nextDiff = Math.min(currentDiff + 1, DIFFS.length - 1);
  showModal(
    '⭐'.repeat(stars) + '☆'.repeat(3 - stars),
    stars === 3 ? 'Perfect! 🏆' : stars === 2 ? 'Well done! 🎉' : 'Level cleared! 👍',
    `${moves} moves · ${elapsed}s · Score: ${score}${bonus > 0 ? ` (+${bonus} bonus)` : ''}`,
    currentDiff < DIFFS.length - 1 ? 'Next Level →' : 'Play Again',
    () => { if (currentDiff < DIFFS.length - 1) { currentDiff = nextDiff; setDiff(currentDiff); } else newGame(); }
  );
}
 
function onTimeout() {
  locked = true;
  cards.forEach((c, i) => { c.up = true; refreshCard(i); });
  showModal(
    '⏰', 'Time\'s Up!',
    `Found ${matchedCount} of ${cards.length / 2} pairs · Score: ${score}`,
    'Try Again',
    () => newGame()
  );
}
 
function showModal(stars, title, body, btnLabel, fn) {
  document.getElementById('m-stars').textContent = stars;
  document.getElementById('m-title').textContent = title;
  document.getElementById('m-body').textContent = body;
  document.getElementById('m-btn').textContent = btnLabel;
  modalNextFn = fn;
  document.getElementById('overlay').style.display = 'flex';
}
 
function closeModal() { document.getElementById('overlay').style.display = 'none'; }
function modalAction() { closeModal(); modalNextFn && modalNextFn(); }
 
function setDiff(i) {
  currentDiff = i;
  document.querySelectorAll('.diff-btn').forEach((b, j) => b.classList.toggle('active', j === i));
  newGame();
}
 
buildThemeBar();
buildLevelProgress();
newGame();
 
document.addEventListener('keydown', e => {
  if (e.code === 'KeyN') newGame();
});