// Generics

export {};

// Motivation and samples

class Queue {
  private data = [];

  push(item) {
    this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue = new Queue();
queue.push(0);
queue.push('1'); // Oops a mistake

console.log(queue.pop().toPrecision(1));
console.log(queue.pop().toPrecision(1)); // Run-time error

// A solution for languages without generics
class QueueNumber extends Queue {
  push(item: number) {
    super.push(item);
  }
  pop(): number {
    return super.pop();
  }
}

const queue = new QueueNumber();
queue.push(0);
queue.push('1'); // Error

// A solution with generics
class Queue<T> {
  private data = [];

  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(0);
queue.push('1'); // Error

// Another example
function reverse<T>(items: T[]): T[] {
  const toReturn = [];

  for (let i = items.length - 1; i >= 0; i--) {
    toReturn.push(items[i]);
  }

  return toReturn;
}

// Design Pattern: Convenience generic

const getJSON = <T>(config: {
  url: string;
  headers?: { [key: string]: string };
}): Promise<T> => {
  const fetchConfig = {
    method: 'GET',
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(config.headers || {})
  };

  return fetch(config.url, fetchConfig).then<T>(response => response.json());
};

type LoadUsersResponse = {
  users: {
    name: string;
    email: string;
  }[];
};

function loadUsers() {
  return getJSON<LoadUsersResponse>({ url: 'https://example.com/users' });
}
