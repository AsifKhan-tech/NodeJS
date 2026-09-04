# Environment Variable

An **environment variable** is a value that is set from `outside` the program. The purpose of environment variables is to be able to `change your program functionality` without having to rebuild and/or redeploy the program.

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
which <command_name>, which ls, which mkdir etc.

| Command    | What it looks for                                                      | What it found for you |
| ---------- | ---------------------------------------------------------------------- | --------------------- |
| which ls   | Only the active program file that runs when you type ls.               | /usr/bin/ls           |
| whereis ls | The program file, its source code (if available), and its manual page. | /usr/bin/ls           |

                                                        (program)/usr/share/man/man1/ls.1.gz (manual)
