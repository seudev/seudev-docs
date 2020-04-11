function showUpdateAvailable(newWorker) {
    let alert = (`
        <div id="update-available">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><path fill="currentColor" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm7.547 21.037h-6.738l3.08-3.08c-1.059-1.059-2.406-1.733-4.043-1.733-3.176 0-5.775 2.599-5.775 5.775 0 3.177 2.599 5.776 5.775 5.776 2.503 0 4.62-1.637 5.391-3.85h2.021c-.866 3.273-3.85 5.776-7.412 5.776-4.235 0-7.701-3.465-7.701-7.701 0-4.235 3.465-7.701 7.701-7.701 2.118 0 4.043.866 5.391 2.31l2.31-2.31v6.738z"></path></svg>
            </span>
            <div class="message">
                <span class="title">Update available</span>
                <a href="javascript:void(0);">Click to update Seudev's docs</a>
            </div>
        </div>
    `);

    let template = document.createElement('template');
    template.innerHTML = alert.trim();
    let element = template.content.firstChild;

    let appName = document.querySelector('.sidebar > .app-name');
    appName.parentNode.insertBefore(element, appName);

    element.addEventListener("click", () => {
        newWorker.postMessage({ action: 'skipWaiting' });
    });
};

window.afterTryRegisterServiceWorker = new Promise((resolve, reject) => {
    window.tryRegisterServiceWorker = () => {
        if (typeof navigator.serviceWorker !== 'undefined') {
            let promise = navigator.serviceWorker.register('sw.js');
            resolve(promise);
        } else {
            resolve(null);
        }
    };
});

window.isUpdateAvailable = window.afterTryRegisterServiceWorker.then(registration => {
    if (!registration) {
        return Promise.resolve({ updateAvailable: false });
    }

    return new Promise((resolve, reject) => {
        registration.addEventListener('updatefound', () => {
            let newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
                switch (newWorker.state) {
                    case 'installed':
                        if (navigator.serviceWorker.controller) {
                            resolve({ updateAvailable: true, newWorker });
                        } else {
                            resolve({ updateAvailable: false });
                        }
                        break;
                }
            });
        });
    });
});
