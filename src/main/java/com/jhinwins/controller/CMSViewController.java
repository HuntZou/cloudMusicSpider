package com.jhinwins.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Jhinwins on 2017/7/27  14:42.
 * Desc:
 */
@Controller
public class CMSViewController {

    @RequestMapping("/index")
    public String indexPage() {
        return "index";
    }

    @RequestMapping("/comments")
    public String commentsPage() {
        return "comments";
    }

}
