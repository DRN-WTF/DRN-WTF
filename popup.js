function showErrorMessage(index) {
    //if (index >= 5) return;

    var errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.top = Math.random() * 80 + 'vh';
    errorMessage.style.left = Math.random() * 80 + 'vw';
    errorMessage.innerHTML = `
      <p><span class="error-label">Warning:</span> Don't close me :3</p>
      <p>System Failure</p>
      <button>Close</button>
    `;
    document.body.appendChild(errorMessage);

    setTimeout(() => {
      errorMessage.style.opacity = 1;
    }, 100);

    errorMessage.querySelector('button').addEventListener('click', function() {
      this.parentElement.style.opacity = 0;
      setTimeout(() => {
        showErrorMessage(index + 1);
        showErrorMessage(index + 1);
        this.parentElement.remove();
      }, 300);
    });

   // setTimeout(() => showErrorMessage(index + 1), 500 + Math.random() * 10);
  }

  //showErrorMessage(0);