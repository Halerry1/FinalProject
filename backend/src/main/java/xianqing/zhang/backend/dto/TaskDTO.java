package xianqing.zhang.backend.dto;

public class TaskDTO {
    private String id;
    private String name;
    private String deadline;
    private String description;
    private UserDTO responsible;

    // Constructors
    public TaskDTO() {}

    public TaskDTO(String id, String name, String deadline, String description, UserDTO responsible) {
        this.id = id;
        this.name = name;
        this.deadline = deadline;
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

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
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