# The NodeJS MCP server allows you to run R script directly in Gemini-Cli
# It is built with node.js

To use it, following the steps:

1. Install Gemini-Cli in your WSL
2. Clone the package into your machine
3. Add settings.json into home folder in .gemini
4. Add your GitHub token into "GITHUB_PERSONAL_ACCESS_TOKEN"
5. Change "args" in the "r-wsl" into your own path cloned the package
6. Run "node index.js" to launch the MCP server in another terminal
7. Enter gemini in terminal, it will show "Using 2 MCP servers"    
8. Use /mcp to check, you will see r-wsl
9. Ignore the Disconnected (0 tools cached) and No tools available
10. Then you can ask gemini to produce R script and run it directly in the Cli
