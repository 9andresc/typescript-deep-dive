// Function Parameters

export {};

// Consider the following function
{
  function foo(flagA: boolean, flagB: boolean) {
    // Your awesome function body
  }
}

// Instead, convert the function to take an object
{
  function foo(config: { flagA: boolean; flagB: boolean }) {
    const { flagA, flagB } = config;
    // Your awesome function body
  }
}
