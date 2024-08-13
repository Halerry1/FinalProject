package xianqing.zhang.backend.dto;

public class EventDTO {
    private String id;
    private String name;
    private String date;
    private String location;
    private String description;
    private UserDTO responsible;

    // Constructors
    public EventDTO() {}

    public EventDTO(String id, String name, String date, String location, String description, UserDTO responsible) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.location = location;
        this.description = description;
        this.responsible = responsible;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public UserDTO getResponsible() {
        return responsible;
    }

    public void setResponsible(UserDTO responsible) {
        this.responsible = responsible;
    }
}