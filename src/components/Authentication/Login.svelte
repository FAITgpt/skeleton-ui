<script lang="ts">
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  
    let email = '';
    let password = '';
  
    const login = async () => {
        const auth = getAuth();
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('uid', userCredentials.user.uid);
        } catch (error) {
            console.error('Authentication error:', error.message);
            console.log(error.code);
        }
    };
  </script>

    <div class="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-md">
      <h1 class="text-2xl font-semibold mb-4 text-black text-center">Login</h1>
    
      <form>
        <div class="mb-4">
          <label for="email" class="text-gray-600 block mb-1">Email:</label>
          <input
            name="email"
            type="email"
            bind:value={email}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
    
        <div class="mb-4">
          <label for="password" class="text-gray-600 block mb-1">Password:</label>
          <input
            name="password"
            type="password"
            bind:value={password}
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
    
        <button
          type="button"
          on:click={login}
          class="w-full bg-primary-800 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Log In
        </button>
      </form>
    </div>