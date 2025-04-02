document.addEventListener("DOMContentLoaded", function () {

    async function checkRepoKey(repoKey) {

        const checkUrl = `https://script.google.com/macros/s/AKfycbzDiSi7dhE3Wlz5EgM-utjhDTX9gPmCUIorniOGb96uLViqggfYALqAf3OD12Y3Kl6k/exec?repo=${repoKey}`;
        const response = await fetch(checkUrl);
        if (!response.ok) throw new Error("Network response was not ok");
        const score = await response.json();
        return score.score;
    }

    window.checkRepoKey = checkRepoKey;

});
