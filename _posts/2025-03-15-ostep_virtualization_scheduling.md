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