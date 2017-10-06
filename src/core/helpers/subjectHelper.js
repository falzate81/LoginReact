import assign from 'object-assign';
import subjectConstants from '../constants/subjectConstants';

export default assign({}, {
    getSubject(code) {
        switch (code)
        {
            case 'ingles':
                return subjectConstants.INGLES;
            case 'lengua':
                return subjectConstants.LENGUA;
            case 'arte':
                return subjectConstants.ARTE;
            case 'historia':
                return subjectConstants.HISTORIA;
            case 'deporte':
                return subjectConstants.DEPORTES;
            case 'musica':
                return subjectConstants.MUSICA;
            case 'matematica':
                return subjectConstants.MATEMATICA;
            case 'biologia':
                return subjectConstants.BILOGIA;
            case 'quimica':
                return subjectConstants.QUIMICA;
        }
    },
    getSubjectCode(name) {
        switch (name)
        {
            case subjectConstants.INGLES:
                return 'ingles';
            case subjectConstants.LENGUA:
                return 'lengua';
            case subjectConstants.ARTE:
                return 'arte';
            case subjectConstants.HISTORIA:
                return 'historia';
            case subjectConstants.DEPORTES:
                return 'deporte';
            case subjectConstants.MUSICA:
                return 'musica';
            case subjectConstants.MATEMATICA:
                return 'matematica';
            case subjectConstants.BILOGIA:
                return 'biologia';
            case subjectConstants.QUIMICA:
                return 'quimica';
        }
    },
    getSubjectColor(code) {
        switch (code)
        {
            case 'ingles':
            case subjectConstants.INGLES:
                return '#fdd835';
            case 'lengua':
            case subjectConstants.LENGUA:
                return '#ffa726';
            case 'arte':
            case subjectConstants.ARTE:
                return '#e91e63';
            case 'historia':
            case subjectConstants.HISTORIA:
                return '#ff5722';
            case 'deporte':
            case subjectConstants.DEPORTES:
                return '#4fc3f7';
            case 'musica':
            case subjectConstants.MUSICA:
                return '#ff4081';
            case 'matematica':
            case subjectConstants.MATEMATICA:
                return '#2196f3';
            case 'biologia':
            case subjectConstants.BILOGIA:
                return '#8bc34a';
            case 'quimica':
            case subjectConstants.QUIMICA:
                return '#aed581';
        }
    },
    getSubjectName(code) {
        switch (code)
        {
            case 'ingles':
            case subjectConstants.INGLES:
                return 'Inglés';
            case 'lengua':
            case subjectConstants.LENGUA:
                return 'Lengua';
            case 'arte':
            case subjectConstants.ARTE:
                return 'Arte';
            case 'historia':
            case subjectConstants.HISTORIA:
                return 'Historia';
            case 'deporte':
            case subjectConstants.DEPORTES:
                return 'Deportes';
            case 'musica':
            case subjectConstants.MUSICA:
                return 'Música';
            case 'matematica':
            case subjectConstants.MATEMATICA:
                return 'Matemáticas';
            case 'biologia':
            case subjectConstants.BILOGIA:
                return 'Biología';
            case 'quimica':
            case subjectConstants.QUIMICA:
                return 'Química';
        }
    },
    getSubjectIcon(code) {
        switch (code)
        {
            case 'ingles':
            case subjectConstants.INGLES:
                return 'ingles';
            case 'lengua':
            case subjectConstants.LENGUA:
                return 'lengua';
            case 'arte':
            case subjectConstants.ARTE:
                return 'arte';
            case 'historia':
            case subjectConstants.HISTORIA:
                return 'historia';
            case 'deporte':
            case subjectConstants.DEPORTES:
                return 'deporte';
            case 'musica':
            case subjectConstants.MUSICA:
                return 'musica';
            case 'matematica':
            case subjectConstants.MATEMATICA:
                return 'matematica';
            case 'biologia':
            case subjectConstants.BIOLOGIA:
                return 'biologia';
            case 'quimica':
            case subjectConstants.QUIMICA:
                return 'quimica';
        }
    }
});
