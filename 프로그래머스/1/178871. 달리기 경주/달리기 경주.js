function solution(players, callings) {
    const rank = {};
    players.forEach((player, index) => {
        rank[player] = index;
    });

    for (const call of callings) {
        const i = rank[call];
        const overtaken = players[i - 1];

        players[i - 1] = call;
        players[i] = overtaken;

        rank[call]--;
        rank[overtaken]++;
    }

    return players;
}
