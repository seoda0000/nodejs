/**
- 병렬 처리
- 작업 하나의 단위를 worker
- 보통 cpu 코어의 개수 만큼 worker를 발생시켜 병렬 처리
 */

var cluster = require("cluster"); // cluster가 코어 하나에 할당된다. 또 만들면 다른 코어에 할당된다.
// 또 만들면 이미 클러스터가 할당된 코어에 또 할당된다. 처음은 master, 이때는 worker가 된다.

cluster.schedulingPolicy = cluster.SCHED_RR; // round robin 방식으로 스케줄링

if (cluster.isMaster == true) { // 마스터 클러스터인지 확인. 마스터가 아니면 병렬이 아니라 시분할이 된다.

    cluster.fork(); // 여러 작업 시분할 병렬 처리. 동작 성공 시 online 이벤트 발생.
    cluster.fork();
    cluster.fork();

    cluster.on('online', function(worker){ // on: 이벤트 처리. 'online'발생 시 이 함수가 수행됨.
        for (var i = 0; i < 10; i++) {
            console.log(worker.process.pid, "동작")
        }

    });
}
