import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class Test extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException
	{
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		out.print("<p> Oh shit, waddup?</p>");

	}
}
