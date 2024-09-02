document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    const addStudentForm = document.getElementById('addStudentForm');
    const loginMessage = document.getElementById('loginMessage');
    
    const addStudentMessage = document.getElementById('addStudentMessage');
    const studentList = document.getElementById('studentList');
    const dataSection = document.getElementById('data');

    let users = [];
    let students = [];
    let loggedInUser = null;

    const updateStudentList = () => {
        studentList.innerHTML = '';
        students.forEach(student => {
            const li = document.createElement('li');
            li.textContent = `${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
            studentList.appendChild(li);
        });
    };

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('signupUsername').value;
        const password = document.getElementById('signupPassword').value;
        
        if (users.find(user => user.username === username)) {
            signupMessage.textContent = 'Username already exists';
        } else {
            users.push({ username, password });
            signupMessage.textContent = 'Signup successful!';
            document.getElementById('signupUsername').value = '';
            document.getElementById('signupPassword').value = '';
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            loggedInUser = user;
            loginMessage.textContent = 'Login successful!';
            dataSection.style.display = 'block';
            loginForm.style.display = 'none';
            document.getElementById('auth').style.display = 'none';
            document.getElementById('studentName').value = '';
            document.getElementById('studentAge').value = '';
            document.getElementById('studentGrade').value = '';
        } else {
            loginMessage.textContent = 'Invalid credentials';
        }
    });

    addStudentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('studentName').value;
        const age = document.getElementById('studentAge').value;
        const grade = document.getElementById('studentGrade').value;

        students.push({ name, age, grade });
        addStudentMessage.textContent = 'Student added!';
        updateStudentList();
    });
})