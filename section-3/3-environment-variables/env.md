# Environment Variable

An **environment variable** is a value that is set from `outside` the program. The purpose of **environment variables** is to be able to `change your program functionality` without having to rebuild and/or redeploy the program.

---

What does it mean of **"environment variable"**?

**Environment** :- To some extend the computer / machine you're using that can be called as an environment.

**Variable** :- There are some variable in this system can be used globally in the system.

1. With the command `"env"`, you can print environment variable in linux. These are **global** environment_variables

2. You can see specific environment variable in terminal:- `printenv <environment_variable>` or `echo <$environment_variable>`

/**_ printenv PATH or echo $PATH _**/

**NOTE**:- With `echo` command it's must use `$` as prefix of environment variable. It tells terminal / shell **expand** variable's value.

/**_ To see SHELL and ENVIRONMENT VARIABLES (global and local) _**/
use `"set"` command

## What Is PATH?

The PATH variable in Linux is an environment variable that tells the shell where to look for executable files when I type a command.
OR
The PATH environment variable is a list of folders where your operating system looks for program files when you type a command in the terminal.

For example, when I type:

ls

If you want to see specific path of command, type
**which <command_name>**, `which ls`, `which mkdir` etc.

| Command    | What it looks for                                                      | What it found for you |
| ---------- | ---------------------------------------------------------------------- | --------------------- |
| which ls   | Only the active program file that runs when you type ls.               | /usr/bin/ls           |
| whereis ls | The program file, its source code (if available), and its manual page. | /usr/bin/ls           |

                                                        (program)/usr/share/man/man1/ls.1.gz (manual)

---

### File system in Linux

Unlike Windows, where files are organized under different drive letters like `C:` or `D:`, Linux uses a **single hierarchical tree structure** that starts at the **root** directory `/`. Everything, **files**, **directories**, **devices**, and even **temporary system information**, is part of this tree.

> Understanding the Linux file system helps you:

- **Navigate more efficiently** through the command line
- **Secure systems properly** by knowing who has access to what
- **Troubleshoot errors faster** by interpreting logs and paths
- **Avoid critical mistakes**, like deleting system files or misconfiguring user permissions

### What Is a File System?

A **file system** is the program so an **operating system** uses it to **organize**, **store**, **retrieve**, and manage data on a storage device, like a **hard disk, SSD, or USB drive**.

> It's running directly inside the core software known as the **kernal**.

![File System](../../../../Danger-Zone/ChaiCode/1.jpg)

At its core, the **file system** acts like a **digital filing cabinet**. It keeps track of:

- File names
- Directory structures
- Metadata (such as permissions and timestamps)
- The actual physical location of file data on disk

### The Linux Filesystem Hierarchy

The **Linux filesystem** is organized in a hierarchical structure, starting from the **root directory** `/`, which acts as the parent for all other files and directories.
This organization ensures logical grouping of **system files**, **user data**, and **application binaries**. Here’s a breakdown of some of the most critical directories:

`/`:- The **top-most directory**. Every other file and directory **stems(starts)** from here. It’s the **base** of the **file system**.

`/bin`:- Short for **“binaries”**. This contains essential user commands such as `ls`, `cp`, `mv`, and `rm`, which are required for **system boot and repair**.

`/boot`:- Houses(necessary) the files needed for **booting** the Linux OS, like the **Linux kernel** `(vmlinuz)`, and **bootloader configurations** like `GRUB`.

`/dev`:- Contains device files. These are not **actual files** but **interfaces** to system devices like **hard drives (/dev/sda)**, **USB devices**, and **virtual devices**.

### Symbolic links

A **symbolic link** (also known as a **symlink** or **soft link**) is a special type of **file** that points to another **file** or **directory**.

Instead of **duplicating** the **original file data**, it merely (just only) **stores the path** to the target object.

#### Executable files

> It is a type of computer file that contains a **program** or a specific set of **encoded** instructions, typically in **machine code**, which a computer's **operating system** and **CPU** can directly execute.

When an **user** or **system** initiates this file, it **triggers** a **_program_** to run or a specific operation to occur.

While the `.exe` extension is the most widely recognized for **executable files**, particularly on **_Microsoft Windows systems_**, **numerous(many)** other file formats also serve as **executables** across different **operating systems**.

##### Types of executable files

There are two types of executable files:- **script** and **binary** executable files.

- **Data Files (.txt, .jpg, .pdf)**: These are passive and require a separate application to interpret their content.

- **Script Files (.bat, .py, .sh)**: These require an interpreter (like Python or Bash) to translate commands into machine code, rather than being directly understood by the CPU.

- **Executable Files**: These contain low-level binary instructions the CPU can act upon immediately.
