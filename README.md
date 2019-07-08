# useSelector Hook for RxJS Observables

Small library to use RxJs observables with [React Hooks](https://reactjs.org/docs/hooks-intro.html) in [React](https://reactjs.org/) Functional Components.

# Usage

```js
  import React from 'react';
  import useSelector from 'rxjs-use-selector';

  export const User = () => {
    const user = useSelector(
      <observable-provider>.currentUser, {}
    );
  }
```

For detailed usage refer - [Example Application](https://github.com/nitor-infotech-oss/akita-react-hooks-ts)
