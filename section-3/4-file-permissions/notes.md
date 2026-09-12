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

1. `+` : Grant
2. `x` : Execute

> `+x` : Grant execute permission

**Remove permission to the file / directory**

`chmod -w file.sh`

1. `-` : Remove
2. `w` : write permission

> `-w` : Remove write permission

`chmod` : command removes the **read**, **write**, and **execute** permissions of `Owner`, `Group`, and `Other`.

- `chmod` : command grants the **write** permission to `Owner`, and `Group`.
- `chmod` : command grants the **read** permission to `Owner`, `Group`, and `Other`.
- `chmod` : command grants the **execute** permission to `Owner`, `Group`, and `Other`.
