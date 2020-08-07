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

// Warns if file contains 'console.log'
const consoleLogsInFiles = async () => {
    const diffs = await Promise.all(
        danger.git.modified_files.map(async filePath => ({
            filePath,
            diff: await danger.git.diffForFile(filePath),
        })),
    );
    const foundConsoleLogs: {
        filePath: string,
        count: number,
    }[] = [];
    diffs.forEach(({diff, filePath}) => {
        if (diff !== null) {
            // match all 'console.log' strings, case insensitive
            const consoleLogCount = diff.added.match(/console\.log\(([^)]+)\);/igm);
            if (consoleLogCount !== null) {
                foundConsoleLogs.push({
                    filePath,
                    count: consoleLogCount.length,
                });
            }
        }
    });

    if (foundConsoleLogs.length > 0) {
        warn(
            `<p>Found <b>'console.log'</b> in following files: </p>
      <ul> 
      ${foundConsoleLogs
          .filter(({filePath}) => filePath !== 'dangerfile.ts')
          .map(
              ({filePath, count}) =>
                  `<li><code>${filePath}</code> - count: <code>${count}</code></li>`,
          )} 
      </ul>
      <p>Please remove if they are already not necessary.</p>
      `,
        );
    }
};

(async () => {
    await consoleLogsInFiles();
  })();