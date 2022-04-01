const core = require('@actions/core');
const github = require('@actions/github');

try {
    const token = core.getInput('token');
    const title = core.getInput('token');
    const body = core.getInput('token');
    const assignees = core.getInput('token');

    const octokit = new github.GitHub(token);

    const response = octokit.issues.create({
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        ...github.context.repo,
        title,
        body,
        assignees: assignees ? assignees.split('\n') : undefined

    });

    core.setOutput('issue', JSON.stringify(response.data));

} catch (error) {
    core.setFailed(error.message)
}