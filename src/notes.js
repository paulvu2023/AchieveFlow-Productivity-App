function loadNotesFromStorage() {
    const notesContainer = document.querySelector('.notes-container');
    if (notesContainer.innerHTML.trim() === '') {
        const storedNotes = localStorage.getItem("notes");
        if (storedNotes) {
            notesContainer.innerHTML = storedNotes;
        }
    }
}

function updateStorageForNotes() {
    localStorage.setItem("notes", document.querySelector('.notes-container').innerHTML);
}

function loadExampleNotes() {
    // Check if example notes have been loaded from local storage
    let exampleNotesLoaded = localStorage.getItem('exampleNotesLoaded') === 'true';
    if (!exampleNotesLoaded) {
        const exampleNotes = [
            "For every action, there is an equal and opposite reaction - Isaac Newton",
            "A harmless man is not a good man. A good man is a very dangerous man who has that under voluntary control. - Jordan Peterson",
        ];
        const notesContainer = document.querySelector('.notes-container');

        exampleNotes.forEach(noteText => {
            const noteMiniContainer = document.createElement('div');
            noteMiniContainer.classList.add('note-mini-container');
            noteMiniContainer.innerHTML = `
                <p contenteditable="true" class="input-box" spellcheck="false">${noteText}</p>
                <button class="delete-note"><i class="fa-regular fa-trash-can"></i></button>
            `;
            notesContainer.append(noteMiniContainer);
        });

        localStorage.setItem('exampleNotesLoaded', 'true'); // Store in local storage
    }
}

function loadNotesPage() {
    clearTasks();
    const container = document.querySelector('.task-list');
    const notesContainer = document.createElement('div');

    notesContainer.classList.add('notes-container');
    document.querySelector('.add-task').style.display = 'none';
    const addNotesButton = document.createElement('button');
    addNotesButton.innerHTML = '<i class="fa-solid fa-plus fa-beat-fade"></i>Add Notes';
    addNotesButton.classList.toggle('add-notes');
    container.append(addNotesButton);
    container.append(notesContainer);


    loadNotesFromStorage();
    loadExampleNotes(); // Load example notes only if not loaded yet
    updateNotes();
    addNotesButton.addEventListener('click', addNote);
}

function addNote() {
    const notesContainer = document.querySelector('.notes-container');
    const noteMiniContainer = document.createElement('div');
    noteMiniContainer.classList.add('note-mini-container');
    noteMiniContainer.innerHTML = `
    <p contenteditable="true" class="input-box" spellcheck="false"></p>
    <button class="delete-note"><i class="fa-regular fa-trash-can"></i></button>
    `
    notesContainer.append(noteMiniContainer);
    updateNotes();
}

function updateNotes() {
    updateStorageForNotes();
    const notesContainer = document.querySelector('.notes-container');
    notesContainer.addEventListener('click', function (e) {
        if (e.target.tagName === 'I' && e.target.classList.contains('fa-trash-can')) {
            e.target.parentElement.parentElement.remove();
            updateStorageForNotes();
        }
        else if (e.target.tagName === 'P') {
            let notes = document.querySelectorAll('.input-box');
            notes.forEach(note => {
                note.onkeyup = function () {
                    updateStorageForNotes();
                }
            });
        }
    });
}

export {
    loadNotesFromStorage,
    updateStorageForNotes,
    loadExampleNotes,
    loadNotesPage,
    addNote,
    updateNotes
};