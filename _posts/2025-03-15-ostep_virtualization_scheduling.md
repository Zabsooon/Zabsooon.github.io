---
title: OSTEP Notes - Process Scheduling
date: 2024-12-12 12:00:00 +0100
toc: true
categories: [OS_Development]
tags: [ostep, virtualization]
---


# Introduction

## Metrics in Scheduling
A **metric** is something that we use to *measure* something, and there are many different types of **metrics** in scheduling. 
We need them so we can compare them in different **scheduling policies**. For example:
- **`Turnaround time(Performance metric)`**
    The turnaround time of a job is defined as the time at which the job completes minus the time at which the job arrived in the system.
- **`Response Time(Fairness metric)`**
    The response time defined as a time from when the job arrives in a system
    to the first time it is scheduled.

## Basic Scheduling Models(Based on Turnaround Time)
We will make the following assumptions about the processes, that are running in the system:
1. Each job runs for the same amount of time.
2. All jobs arrive at the same time.
3. Once started, each job runs to completion.
4. All jobs only use the CPU(i.e., the perform no I/O).
5. The run-time of each job is known.
And we are going to improve the design by getting rid of assuption about process one by one.

### First In, First Out (**FIFO**)
This is the most basic scheduling algorithm we can implement.
We basicly serve the first process until it is complete,
and we go to another one on it's completion.
This is very poor design, because we can only serve one process.
Moreover, we need to finish it until we can take over another task.

### Shortest Job First (**SJF**)
This approach improves **FIFO** aproach in that way that we no longer
have to wait for the long process to complete.
However one thing we do need to know for it to work is a process time to completion,
without it we could not implement it.
This approach however would not make sense if all jobs would not be scheduled at the same time.
If a very long process is scheduled at `t=1`, and another very short process is scheduled at `t=2`.
The second process would have to wait for the first one to complete anyways.

### Shortest Time-to-Completion First (**STCF**)
This design of scheduling assume processes do not have to run to completion.
Now whenever we have a very long process running, 
we can switch context to shorter Time-to-Completion.
And after the shorter processes are done we can go back to the longer one.

# More Advanced Designs

## Basic Scheduling Models(Based on Response Time)

### Round Robin(**RR**)
Instead running processes to completion, RR runs a process for a time slice
(sometimes called a scheduling quantum) and then switches to the next job in the run queue.
It does that repetatedly until all the processes are finished.
Context switching requires balance, 
because if we switch too often we will spend more time switching contexts
than actaully running the process - this is called `amortization`.

## Multi-Level Feedback Queue (**MLFQ**)
The implementation specifics of each **MLFQ** differ from eachother.
However most of the approaches are similar.
In our design, the **MLFQ** has a number of queues, 
each assigned with a different `priority level`.

### How Priority Changes
- If `Priority(A)` > `Priority(B)`, **A** runs (**B** doesn't).
- If `Priority(A)` = `Priority(B)`, **A** & **B** run in **RR**.

**Allotment** is the amount of time a process can spend at a given priority level,
before it's priority is reduced.
- When a process enters the system, it is placed at the highest priority (the topmost queue).

Without Gaming Tolerance(Bad design):
- If a process uses up its **allotment** while running, its priority is reduced.
- If a process gives up the CPU (for example, by performing an I/O operation)

With Gaming Tolerance(Better design):
- Once a job uses its time **allotment** at a given level 
(regardless of how many times it has given up the CPU),
its priority is reduced (i.e., it moves down one queue).

Without any protection from gaming,
a process can issue an I/O before its allotment ends, 
thus staying at the same priority level, and dominating CPU time.
before the **allotment** is up, it stays at the *same* `priority level`.

To avoid the problem of `starvation` of the process we periodically **boost** the priority of
all the processes in the system. Therefore another rule:
- After some time period `S`, move all the processes in the system to the topmost queue.

## Proportional Share(**Fair-share Scheduler**)
This design principle focuses on sharing resources and providing processes with CPU% time.
The percentage of CPU time is based on the amount of lottery tickets each process has.
The process has more lottery tickets if it is run more often than others.

## Stride Scheduling
We do not have to do it randomly like in design above.
We can assign a number to the process, which is a proportion of how much CPU% it will get.
Then we take some big number and divide all of these numbers by it.
For each of the process we get its `stride`.
Now we just simply execute the process with the smallest `stride` and 
increment it by its own value after the execution.

## The Linux Completely Fair Scheduler (**CFS**)
This is the default scheduler in Linux, unlike many traditional schedulers that uses fixed time slices,
**CFS** uses a dynamic approach based on `vruntime` (virtual runtime).
Each process accumulates `vruntime` as it runs, the process with the lowest one will be executed.
There are two key parameters to ensure balance fairness and performance:
- `sched_latency` which determines how long a process runs before being considered for a switch.
It's devided by the number of active processes to calculate dynamic time slices.
It is set to `48ms` by default.

- `min_granularity` which ensures that no process runs with an overly small time slice,
preventing excessive context switching.
It is set to `6ms` by default.

There is much more to it such as `Red-Black Trees`, but it is too specific for the implementation.

### Adjusting process priority (**Niceness**)
You can manually change process priorities by feature called `niceness`.
The clasic **UNIX** mechanism enables processes to get a higher or lower share of the CPU.
`Niceness` values range from `-20` (highest priority) to `+19` (lowest priority).
The nicer you are the less you get.
