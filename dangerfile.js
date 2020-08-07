import {danger, warn} from 'danger';

// No PR is too small to include a description of why you made a change
if (danger.github.pr.body.length < 10) {
    warn('Please include a description of your PR changes.');
}

// Warns if there are changes to package.json
const packageChanged = danger.git.modified_files.includes('package.json');

if (packageChanged) {
    warn('Changes were made to package.json');
}

// No assignee assigned
if (danger.github.pr.assignee === null) {
    warn('Please assign at least 1 assignee.');
}
