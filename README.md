# Next.js 15: Accessing router.query before component mount

This repository demonstrates a common issue in Next.js 15 applications where accessing `router.query` before the component has fully mounted can lead to errors or unexpected behavior.  The issue occurs because `router.query` is populated after the component is mounted and receives data from the routing system.

## Problem

The provided `bug.js` file contains a Next.js component that attempts to access `router.query` before the component has completed mounting. This results in `router.query` being undefined, leading to potential errors and incorrect application behavior.

## Solution

The `bugSolution.js` file presents a corrected approach.  The access to `router.query` is delayed until after the component has fully mounted, ensuring data is available and preventing errors.