# The Node.JS MCP server allows you to run R script directly in Gemini-Cli

To use it, following the steps:

1. Install Gemini-Cli in WSL
2. Clone the package into your machine
3. Add dependency packages using npm install https://github.com/jiaqiuwang123/mcp-r-wsl-server.git --save-dev
4. Move settings.json into home folder in .gemini
5. Add your GitHub token into "GITHUB_PERSONAL_ACCESS_TOKEN"
6. Change "args" in the "r-wsl" into your own path cloned the package
7. Run "node index.js" to launch the MCP server in another terminal
8. Enter gemini in terminal, it will show "Using 2 MCP servers"    
9. Use /mcp to check, you will see r-wsl
10. Ignore the Disconnected (0 tools cached) and No tools available
11. Then you can ask gemini to produce R script and run it directly in the Cli
