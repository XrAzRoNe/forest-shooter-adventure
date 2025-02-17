<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Forest Shooter Adventure</title>
  <style>
    body { margin: 0; overflow: hidden; }
    canvas { display: block; background: #4a752c; }
  </style>
</head>
<body>
  <canvas id="gameCanvas"></canvas>
  <script>
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Karakter Pemain
    const player = {
      x: 50,
      y: canvas.height - 100,
      width: 50,
      height: 50,
      health: 100,
      color: 'blue',
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      },
      move(direction) {
        if (direction === 'left' && this.x > 0) this.x -= 10;
        if (direction === 'right' && this.x < canvas.width - this.width) this.x += 10;
      }
    };

    // Musuh
    const enemy = {
      x: canvas.width - 100,
      y: canvas.height - 100,
      width: 50,
      height: 50,
      health: 50,
      color: 'red',
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      },
      attack() {
        player.health -= 10;
        if (player.health <= 0) gameOver();
      }
    };

    // Game Loop
    function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      player.draw();
      enemy.draw();
      requestAnimationFrame(gameLoop);
    }

    // Kontrol Pemain
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') player.move('left');
      if (e.key === 'ArrowRight') player.move('right');
    });

    // Game Over
    function gameOver() {
      alert('Game Over!');
      window.location.reload();
    }

    gameLoop();
  </script>
</body>
</html>
