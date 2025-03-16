---
title: OSTEP Notes - Process Scheduling
date: 2024-12-12 12:00:00 +0100
categories: [OS_Development]
tags: [ostep, virtualization]
---

# Process Scheduling

## Introduction

### Metrics in Scheduling
A **metric** is something that we use to *measure* something, and there are many different types of **metrics** in scheduling. 
We need them so we can compare them in different **scheduling policies**. For example:
- **`Turnaround time(Performance metric)`**
    The turnaround time of a job is defined as the time at which the job completes minus the time at which the job arrived in the system.
- **`(Fairness metric)`**

### Basic Scheduling Models

#### First In, First Out (FIFO)
This is the most basic scheduling algorithm we can implement.
We basicly serve the first process until it is complete,
and we go to another one on it's completion.
This is very poor design, because we can only serve one process.
Moreover, we need to finish it until we can take over another task.

#### Shortest Job First (SJF)
This approach improves **FIFO** aproach in that way that we no longer
have to wait for the long process to complete.
However one thing we do need to know for it to work is a process time to completion,
without it we could not implement it.
This approach however would not make sense if all jobs would not be scheduled at the same time.
If a very long process is scheduled at `t=1`, and another very short process is scheduled at `t=2`.
The second process would have to wait for the first one to complete anyways.

#### Shortest Time-to-Completion First (STCF)
