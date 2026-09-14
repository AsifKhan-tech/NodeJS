# File permissions

## Types of permissions

- Read
- Write
- Execute

1. `r` : Read
2. `w` : Write
3. `x` : Execute

> When create a directory, the computer **allocates** `4KB` space in memory.

> When we create an user in `UNIX` **operating system**, along with that a group is also created.

```bash
-rwxrwxr-x 1 asifkhan asifkhan 25 Sep 10 23:27 index.ts
```

1. **-** : file / **d** : directory
2. **rwx** : These permissions for current user in the given group (Read, Write, and Execute)
3. **rwx** : These permissions for the user that is in the user's group(Read, Write, and Execute)
4. **-x** : The user neither is current user nor in the group of user (other) (Execute)

```bash
-rw-rw-r-- 1 asifkhan asifkhan 66 Sep 10 23:22 app.js
```

1. **-** : file.
2. **d** : directory.
3. **l** : symbolic link.

`rw-` : Group of three characters (Read and write)
`rw-` : Group of three characters (Read and write)
`r--` : Group of three characters (Read)

![File Permissions](./file-permission.png)

`chmod +x` : **Give permission to the file / directory to all**

1. **_Owner(Current User)_**
2. **_Group_**
3. **_Other_**

`chmod +x app.js`

- `+` : Grant
- `x` : Execute

> `+x` : Grant execute permission

**Remove permission to the file / directory**

`chmod -w file.sh`

- `-` : Remove
- `w` : write permission

> `-w` : Remove write permission

`chmod` : command removes the **read**, **write**, and **execute** permissions of `Owner`, `Group`, and `Other`.

- `chmod` : command grants the **write** permission to `Owner`, and `Group`.
- `chmod` : command grants the **read** permission to `Owner`, `Group`, and `Other`.
- `chmod` : command grants the **execute** permission to `Owner`, `Group`, and `Other`.

> **If there is a need to give write permission to Other**?

**There is no by default execute permission to the file**.

We cann't **run** script executable file without giving the **path** of the file becuase the **terminal** is starts seraching for **built-in** command in the system.

- There is a case to **remove Other's** file **execution** permission.

```bash
chmod o-x app.js
```

- There is a case to **remove Group's** file **execution** permission.

```bash
chmod g-x app.js
```

- There is a case to **remove Owner's** file **execution** permission.

```bash
chmod -x app.js
```

> Also, remove the **read** and **write** file permissions individually like this.

- There is a case to **Grant Owner's** file **execution** permission.

```bash
chmod u+x app.js
```

- There is a case to **Grant Group's**, **Other's** file **write** permission.

```bash
chmod g+w,o+w app.js
```

- There is a case to **drop** all permissions to the **User**.

```bash
chmod u-w,u-r,u-x app.js
```

> Something can do like it with the `Group` and `Other`.

How to give permissions in one go to the `User`, `Group`, and `Other`.

```bash
chmod u=rwx,g=rx,o=rx new.sh
```

**To see the numeric value of file permissions**.

```bash
stat -c "%A %a %n" app.js
```

**How to grant or remove permissions using numbers**.

```bash
chmod 666 app.js
```

- For **Owner** : 6 = read (4) + write (2)
- For **Group** : 6 = read (4) + write (2)
- For **Other** : 6 = read (4) + write (2)

**Git Permissions**

- **100644** : Normal file with non-executable permission
- **100755** : Normal file with executable permission
- **120000** : Symbolic link
- **040000** : Directory

---

> **How command get execute in terminal**?

- **Commands** are instructions given by the **user** to the **Operating System** via **Command Line Interface (CLI)** or **Terminal** to perform certain **task**.

**There are several types of commands**.
**A command can be**

- **an executable**
- **a shell built-in program**
- **a shell functon**
- **an alias**

```bash
type
```

- The **`type`** command can figure out the **type** of the command.

```bash
type pwd
```

- **Create function as a command in bash file**.

```bash
cd () {
    echo This is the example of function.
}
```

- **How to availabe this function**.

```bash
source ~/.bashrc
```

1. **Alias** : Firstly **bash** checks if the command **matches** any defined aliases.

2. **Functions** : Next, it checks if the commands **matches** any defined **shell** functions.

3. **Built-ins** : Then, **Bash** checks if the command is a built-in **shell** command like (`cd`, `echo`, `pwd` etc).

4. **Hash Table** : **Bash** checks its **hash table** of previously looked up executables to quickly locate executables.

5. **Executable files** : Finally, it searches through the directories listed in `PATH` **environment variable**, in order they appear to find an **executable** file matching the command name.

**`which` command tell the location of the _executable_ command**.

```bash
which pwd
```

**Output**

```bash
/usr/bin/pwd
```

```bash
man pwd
```

`man <command>` : If you don't know **how to use the certain command**, run this to get manual.
