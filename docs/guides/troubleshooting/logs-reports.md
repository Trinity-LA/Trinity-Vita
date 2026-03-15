# Logs & Reports

When encountering an issue with the Trinity Launcher or any of its components, providing a detailed report with logs is crucial for our team to help you effectively.

## 1. Retrieving Launcher Logs

Before making a report, you need to capture the logs that contain technical details about the error.

### How to export logs via Terminal

Currently, the most reliable way to obtain logs is by running the application from the terminal. This captures real-time output, which is crucial for debugging.

**For Flatpak users:**
```bash
flatpak run "Package.ID"
```

**For Native / AppImage users:**
```bash
# AppImage
./TrinityLauncher.AppImage

# Native
trinity-launcher
```

Copy the terminal output and save it to a text file named `trinity-log.txt`.

## 2. Reporting the Issue

Once you have your logs, follow these steps to report the problem correctly.

1.  Join our **Discord Server**.
2.  Go to the **#help-forum** channel.
3.  **Create a New Post** for your issue.

## 3. What to Include in Your Report

Your post must include the following details to be considered. **Please explain clearly:**

*   **What happened:** A clear description of the error.
*   **How it happened:** Step-by-step instructions to reproduce the issue.
*   **System Details:**
    *   OS & Version (e.g., Ubuntu 22.04, Arch Linux).
    *   Launcher Version.
    *   Components/Hardware (CPU, GPU, RAM) - *Report relevant info only.*
*   **Actions Taken:** What have you tried so far to fix it?

## 4. Guidelines

::: warning IMPORTANT
**Follow the pinned messages in the #help-forum channel.**
:::

Failure to follow the guidelines or providing incomplete information may result in your support request being ignored or closed. 

*   Be patient and respectful.
*   Do not DM team members for support.
*   Use code blocks for short log snippets or upload the file for long logs.
