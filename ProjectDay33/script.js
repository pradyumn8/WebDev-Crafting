  const canvas = document.getElementById('firecrackerCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Firecracker() {
      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.radius = 2;
      this.velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5
      };
      this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    Firecracker.prototype.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    };

    Firecracker.prototype.update = function () {
      this.draw();
      this.x += this.velocity.x;
      this.y += this.velocity.y;
      this.radius -= 0.02;
    };

    const firecrackers = [];

    function animate() {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < firecrackers.length; i++) {
        firecrackers[i].update();
        if (firecrackers[i].radius < 0.1) {
          firecrackers.splice(i, 1);
        }
      }
    }

    canvas.addEventListener('click', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      for (let i = 0; i < 100; i++) {
        const firecracker = new Firecracker();
        firecracker.x = mouseX;
        firecracker.y = mouseY;
        firecrackers.push(firecracker);
      }
    });

    animate();