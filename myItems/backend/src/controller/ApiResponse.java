package myitems.backend.controller;

import java.util.List;
import java.util.Map;

public class ApiResponse {
    private Object data;
    private Map<String, Object> meta;

    public ApiResponse() {}

    public ApiResponse(Object data, Map<String, Object> meta) {
        this.data = data;
        this.meta = meta;
    }

    public static ApiResponse of(List<?> data, int page, int pageSize, long total) {
        ApiResponse r = new ApiResponse();
        r.setData(data);
        r.setMeta(Map.of("page", page, "pageSize", pageSize, "total", total));
        return r;
    }

    public Object getData() { return data; }
    public void setData(Object data) { this.data = data; }

    public Map<String, Object> getMeta() { return meta; }
    public void setMeta(Map<String, Object> meta) { this.meta = meta; }
}
