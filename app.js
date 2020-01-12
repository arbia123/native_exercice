const courseNameInput = document.querySelector('#course-name-input');
const courseRatingInput = document.querySelector('#course-rating-input');
const addBtn = document.querySelector('#btn-add');
const courseList = document.querySelector('#course-list');
const alertCtrl = document.querySelector('ion-alert-controller');

addBtn.addEventListener('click',()=>{
    const enteredCourseName = courseNameInput.value;
    const enteredRatingName = courseRatingInput.value;

    if(
        enteredCourseName.trim().length == 0 ||
        enteredRatingName.trim().length == 0 ||
        enteredRatingName < 1 ||
        enteredRatingName > 5
    ) {
        alertCtrl.create({
            message: 'Please enter a valid course name and rating',
            header: 'Invalid inputs',
            buttons: ['Okay']
        }).then(alertElt => {
            alertElt.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<strong>${enteredCourseName}:<strong>&nbsp;${enteredRatingName}/5`;

    courseList.appendChild(newItem);

    courseNameInput.value='';
    courseRatingInput.value='';
});