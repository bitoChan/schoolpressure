document.addEventListener('DOMContentLoaded', function () {
    let scene = document.querySelector('#scene');
    let background = document.querySelector('#background');
    let role = document.querySelector('#role');
    let school = document.querySelector('#School');
    let clickCount = 0;

    function handleClick() {
        clickCount++;
        if (clickCount === 1) {
            background.style.display = 'none';
            role.style.display = 'block';
        } else if (clickCount === 2) {
            background.style.display = 'none';
            role.style.display = 'none';
            school.setAttribute('visible', 'true');
            scene.style.display = 'none';
        }
    }

    background.addEventListener('click', handleClick);
    role.addEventListener('click', handleClick);
});
