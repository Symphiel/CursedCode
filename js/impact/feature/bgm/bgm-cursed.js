ig.module("impact.feature.bgm.bgm-cursed").requires("impact.feature.bgm.bgm").defines(function() {
    ig.merge(ig.BGM_DEFAULT_TRACKS, {
        cursedWorld: {
            field: {
                track: "puzzle-pg",
                volume: 1
            },
            battle: {
                track: "tutorial-battle",
                volume: 1
            },
            rankBattle: {
                track: "fieldBattle",
                volume: 1
            },
            sRankBattle: {
                track: "s-rank",
                volume: 1
            }
        }
    });
});